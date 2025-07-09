import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, AlertCircle, Edit } from 'lucide-react';
import { loadGuestList, findGuestByEmail, Guest } from '@/utils/guestList';
import { supabase } from '@/integrations/supabase/client';

interface RSVPFormData {
  name: string;
  email: string;
  attendance: Record<string, string>;
  dietaryRestrictions: string;
  accommodation: string;
  message: string;
}

interface ExistingResponse {
  id: string;
  guest_email: string;
  guest_name: string;
  attendance: Record<string, string>;
  dietary_restrictions: string | null;
  accommodation: string | null;
  message: string | null;
  group_id: string;
}

const RSVPPage = () => {
  const { toast } = useToast();
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [currentGuest, setCurrentGuest] = useState<Guest | null>(null);
  const [existingResponse, setExistingResponse] = useState<ExistingResponse | null>(null);
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attendance: {},
    dietaryRestrictions: '',
    accommodation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadGuestList().then(setGuestList);
  }, []);

  const checkExistingResponse = async (email: string) => {
    const guest = findGuestByEmail(guestList, email);
    if (!guest) return null;
    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .select('*')
        .eq('group_id', String(guest.group_id))
        .maybeSingle();
      if (error) {
        console.error('Error checking existing response:', error);
        return null;
      }
      return data;
    } catch (error) {
      console.error('Error checking existing response:', error);
      return null;
    }
  };

  const handleNameVerification = async () => {
    if (!formData.name) {
      toast({
        title: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }

    // Find guest by name (case-insensitive, trimmed)
    const guest = guestList.find(g => g.name.trim().toLowerCase() === formData.name.trim().toLowerCase());
    if (!guest) {
      toast({
        title: "Name not found",
        description: "Your name is not on our guest list. Please check the spelling or contact us.",
        variant: "destructive"
      });
      return;
    }

    // Check for existing response
    const existing = await checkExistingResponse(guest.email);
    setCurrentGuest(guest);
    setEmailVerified(true);
    if (existing) {
      setExistingResponse({
        ...existing,
        attendance: typeof existing.attendance === 'string' ? JSON.parse(existing.attendance) : existing.attendance
      });
      setFormData(prev => ({
        ...prev,
        name: existing.guest_name,
        email: guest.email, // set email for later use
        attendance: typeof existing.attendance === 'string' ? JSON.parse(existing.attendance) : existing.attendance,
        dietaryRestrictions: existing.dietary_restrictions || '',
        accommodation: existing.accommodation || '',
        message: existing.message || ''
      }));
      toast({
        title: "Existing RSVP Found",
        description: `Hi ${existing.guest_name}! We found your previous response. You can edit it below.`,
      });
    } else {
      setFormData(prev => ({
        ...prev,
        name: guest.name,
        email: guest.email // set email for later use
      }));
      toast({
        title: "Welcome!",
        description: `Hi ${guest.name}! Please complete your RSVP below.`,
      });
    }
  };

  const handleInputChange = (field: keyof RSVPFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailVerified || !currentGuest) {
      toast({
        title: "Please verify your email first",
        variant: "destructive"
      });
      return;
    }

    // Get all group members
    const groupGuests = guestList.filter(g => String(g.group_id) === String(currentGuest.group_id));
    if (groupGuests.length === 0) {
      toast({
        title: "No guests found for your group.",
        variant: "destructive"
      });
      return;
    }

    // Ensure attendance is filled for each group member
    const missingAttendance = groupGuests.some(g => !formData.attendance[g.name]);
    if (missingAttendance) {
      toast({
        title: "Please select the attendance status for each guest",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // For each guest in the group, upsert their RSVP
      const upsertResults = await Promise.all(groupGuests.map(async (guest) => {
        // Check for existing response for this guest using guest_name and group_id
        const { data: existing, error: fetchError } = await supabase
          .from('rsvp_responses')
          .select('*')
          .eq('guest_name', guest.name)
          .eq('group_id', guest.group_id)
          .maybeSingle();
        if (fetchError) throw fetchError;

        const responseData = {
          guest_email: guest.email ? guest.email.toLowerCase() : null,
          guest_name: guest.name,
          attendance: formData.attendance[guest.name],
          dietary_restrictions: formData.dietaryRestrictions || null,
          accommodation: formData.accommodation || null,
          message: formData.message || null,
          updated_at: new Date().toISOString(),
          group_id: guest.group_id || null
        };
        // console.log("Submitting RSVP for:", responseData);

        let result;
        if (existing) {
          result = await supabase
            .from('rsvp_responses')
            .update(responseData)
            .eq('guest_name', guest.name)
            .eq('group_id', guest.group_id);
          console.log("Update result:", result);
        } else {
          result = await supabase
            .from('rsvp_responses')
            .insert([responseData]);
          // console.log("Insert result:", result);
        }

        if (result.error) {
          console.error("Supabase error:", result.error);
          toast({
            title: "Submission Error",
            description: result.error.message || "Unknown error",
            variant: "destructive"
          });
        }

        return result;
      }));

      // Check for any errors
      const anyError = upsertResults.some(r => r.error);
      if (anyError) throw new Error('One or more responses failed to save.');

      toast({
        title: "RSVP Submitted!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        attendance: {},
        dietaryRestrictions: '',
        accommodation: '',
        message: ''
      });
      setEmailVerified(false);
      setCurrentGuest(null);
      setExistingResponse(null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Error submitting RSVP",
        description: "There was an error saving your response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditResponse = () => {
    setIsEditing(true);
  };

  return (
    <section className="py-20 bg-white min-h-screen" style={{ backgroundImage: "url('/images/test_flowers.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              RSVP
            </h2>
            <p className="text-gray-600 text-lg">
              Please let us know if you'll be joining us!
            </p>
          </div>

          <Card className="shadow-lg border-wedding-peach">
            <CardHeader className="bg-gradient-to-r from-wedding-peach to-wedding-cream">
              <CardTitle className="text-center font-serif text-2xl text-wedding-coral">
                We Hope You Can Join Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {!emailVerified ? (
                <div className="space-y-6">
                  <div className="bg-wedding-blue/10 border border-wedding-blue/20 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-wedding-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-wedding-blue">Guest List Verification</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Please enter your full name as it appears on your invitation to access the RSVP form.
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name-verify" className="text-wedding-coral font-medium">
                      Full Name from Invitation
                    </Label>
                    <Input
                      id="name-verify"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your Full Name"
                      className="mt-1 border-wedding-peach focus:border-wedding-coral"
                      onKeyPress={(e) => e.key === 'Enter' && handleNameVerification()}
                    />
                  </div>
                  <Button
                    onClick={handleNameVerification}
                    className="w-full bg-wedding-coral hover:bg-wedding-coral/90 text-white"
                  >
                    Verify Name & Continue
                  </Button>
                </div>
              ) : existingResponse && !isEditing ? (
                <div className="space-y-6">
                  <div className="bg-wedding-sage/10 border border-wedding-sage/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-wedding-sage">
                      Your RSVP Response
                    </p>
                    <p className="text-sm text-gray-600">
                      Thank you for responding! Here's your current RSVP:
                    </p>
                  </div>

                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-700">Name:</p>
                      <p className="text-gray-600">{existingResponse.guest_name}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Attendance:</p>
                      <p className="text-gray-600 capitalize">
                        {existingResponse.attendance === 'yes' ? 'Yes, I\'ll be there!' : 'Sorry, can\'t make it'}
                      </p>
                    </div>
                    {existingResponse.attendance === 'yes' && (
                      <>
                        {existingResponse.dietary_restrictions && (
                          <div>
                            <p className="font-medium text-gray-700">Dietary Restrictions:</p>
                            <p className="text-gray-600">{existingResponse.dietary_restrictions}</p>
                          </div>
                        )}
                        {existingResponse.accommodation && (
                          <div>
                            <p className="font-medium text-gray-700">Accommodation:</p>
                            <p className="text-gray-600">{existingResponse.accommodation}</p>
                          </div>
                        )}
                      </>
                    )}
                    {existingResponse.message && (
                      <div>
                        <p className="font-medium text-gray-700">Message:</p>
                        <p className="text-gray-600">{existingResponse.message}</p>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={handleEditResponse}
                    className="w-full bg-wedding-coral hover:bg-wedding-coral/90 text-white"
                  >
                    <Edit className="w-5 h-5 mr-2" />
                    Edit My Response
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-wedding-sage/10 border border-wedding-sage/20 rounded-lg p-4">
                    <p className="text-sm font-medium text-wedding-sage">
                      {existingResponse ? `Editing response for ${currentGuest?.name}!` : `Welcome, ${currentGuest?.name}!`}
                    </p>
                    {/* <p className="text-sm text-gray-600">
                      You are invited with up to {currentGuest?.invited_guests} guest{(currentGuest?.invited_guests || 1) > 1 ? 's' : ''} total.
                    </p> */}
                  </div>

                  {currentGuest && guestList
                    .filter(g => String(g.group_id) === String(currentGuest.group_id))
                    .sort((a, b) => {
                      if (a.name === currentGuest.name) return -1;
                      if (b.name === currentGuest.name) return 1;
                      return a.name.localeCompare(b.name);
                    })
                    .map((guest) => (
                      <div key={guest.name} className="mb-4">
                        <Label className="text-wedding-coral font-medium mb-2 block">
                          Will {guest.name} be attending?
                        </Label>
                        <RadioGroup
                          value={formData.attendance[guest.name] || ''}
                          onValueChange={(value) => setFormData(prev => ({
                            ...prev,
                            attendance: { ...prev.attendance, [guest.name]: value }
                          }))}
                          className="flex space-x-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id={`yes-${guest.name}`} className="border-wedding-coral" />
                            <Label htmlFor={`yes-${guest.name}`}>Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id={`no-${guest.name}`} className="border-wedding-coral" />
                            <Label htmlFor={`no-${guest.name}`}>No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    ))}

                  {Object.values(formData.attendance).some(val => val === 'yes') && (
                    <>
                      <div>
                        <Label htmlFor="dietary" className="text-wedding-coral font-medium">
                          Dietary Restrictions
                        </Label>
                        <Input
                          id="dietary"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                          placeholder="Any allergies or dietary needs?"
                          className="mt-1 border-wedding-peach focus:border-wedding-coral"
                        />
                      </div>

                      <div>
                        <Label htmlFor="accommodation" className="text-wedding-coral font-medium">
                          Where are you planning on staying?
                          <span className="block text-xs text-gray-500 font-normal">
                            (To help us get an accurate headcount for transportation to/from the hotel)
                          </span>
                        </Label>
                        <Input
                          id="accommodation"
                          value={formData.accommodation}
                          onChange={(e) => handleInputChange('accommodation', e.target.value)}
                          placeholder="Hotel, Airbnb, with family, etc."
                          className="mt-1 border-wedding-peach focus:border-wedding-coral"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="message" className="text-wedding-coral font-medium">
                      Message for the Happy Couple
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Share your well wishes or favorite memory..."
                      className="mt-1 border-wedding-peach focus:border-wedding-coral"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wedding-coral hover:bg-wedding-coral/90 text-white py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {existingResponse ? 'Update RSVP' : 'Send RSVP'}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RSVPPage;
