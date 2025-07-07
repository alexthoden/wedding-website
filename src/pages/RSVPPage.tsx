
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send, AlertCircle, Edit } from 'lucide-react';
import { loadGuestList, findGuestByEmail, Guest } from '@/utils/guestList';
import { supabase } from '@/integrations/supabase/client';

interface RSVPFormData {
  name: string;
  email: string;
  attendance: string;
  guests: string;
  dietaryRestrictions: string;
  message: string;
}

interface ExistingResponse {
  id: string;
  guest_email: string;
  guest_name: string;
  attendance: string;
  number_of_guests: number;
  dietary_restrictions: string | null;
  message: string | null;
}

const RSVPPage = () => {
  const { toast } = useToast();
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [currentGuest, setCurrentGuest] = useState<Guest | null>(null);
  const [existingResponse, setExistingResponse] = useState<ExistingResponse | null>(null);
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadGuestList().then(setGuestList);
  }, []);

  const checkExistingResponse = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .select('*')
        .eq('guest_email', email.toLowerCase())
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

  const handleEmailVerification = async () => {
    if (!formData.email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    const guest = findGuestByEmail(guestList, formData.email);
    if (!guest) {
      toast({
        title: "Email not found",
        description: "Your email address is not on our guest list. Please check the spelling or contact us.",
        variant: "destructive"
      });
      return;
    }

    // Check for existing response
    const existing = await checkExistingResponse(formData.email);
    
    setCurrentGuest(guest);
    setEmailVerified(true);
    
    if (existing) {
      setExistingResponse(existing);
      setFormData(prev => ({ 
        ...prev, 
        name: existing.guest_name,
        attendance: existing.attendance,
        guests: existing.number_of_guests.toString(),
        dietaryRestrictions: existing.dietary_restrictions || '',
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
        guests: guest.invited_guests.toString()
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

    if (!formData.attendance) {
      toast({
        title: "Please select your attendance status",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const responseData = {
        guest_email: formData.email.toLowerCase(),
        guest_name: formData.name,
        attendance: formData.attendance,
        number_of_guests: parseInt(formData.guests) || 1,
        dietary_restrictions: formData.dietaryRestrictions || null,
        message: formData.message || null,
        updated_at: new Date().toISOString()
      };

      let result;
      if (existingResponse) {
        // Update existing response
        result = await supabase
          .from('rsvp_responses')
          .update(responseData)
          .eq('id', existingResponse.id);
      } else {
        // Insert new response
        result = await supabase
          .from('rsvp_responses')
          .insert([responseData]);
      }

      if (result.error) {
        throw result.error;
      }

      toast({
        title: existingResponse ? "RSVP Updated!" : "RSVP Submitted!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        attendance: '',
        guests: '1',
        dietaryRestrictions: '',
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
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              RSVP
            </h2>
            <p className="text-gray-600 text-lg">
              Please let us know if you'll be joining us for our special day
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
                        Please enter the email address from your invitation to access the RSVP form.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email-verify" className="text-wedding-coral font-medium">
                      Email Address from Invitation
                    </Label>
                    <Input
                      id="email-verify"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-1 border-wedding-peach focus:border-wedding-coral"
                      onKeyPress={(e) => e.key === 'Enter' && handleEmailVerification()}
                    />
                  </div>
                  
                  <Button
                    onClick={handleEmailVerification}
                    className="w-full bg-wedding-coral hover:bg-wedding-coral/90 text-white"
                  >
                    Verify Email & Continue
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
                        <div>
                          <p className="font-medium text-gray-700">Number of Guests:</p>
                          <p className="text-gray-600">{existingResponse.number_of_guests}</p>
                        </div>
                        {existingResponse.dietary_restrictions && (
                          <div>
                            <p className="font-medium text-gray-700">Dietary Restrictions:</p>
                            <p className="text-gray-600">{existingResponse.dietary_restrictions}</p>
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
                    <p className="text-sm text-gray-600">
                      You are invited with up to {currentGuest?.invited_guests} guest{(currentGuest?.invited_guests || 1) > 1 ? 's' : ''} total.
                    </p>
                  </div>

                  <div>
                    <Label className="text-wedding-coral font-medium mb-3 block">
                      Will you be attending? *
                    </Label>
                    <RadioGroup
                      value={formData.attendance}
                      onValueChange={(value) => handleInputChange('attendance', value)}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" className="border-wedding-coral" />
                        <Label htmlFor="yes" className="text-gray-700">
                          Yes, I'll be there!
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" className="border-wedding-coral" />
                        <Label htmlFor="no" className="text-gray-700">
                          Sorry, can't make it
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.attendance === 'yes' && (
                    <>
                      <div>
                        <Label htmlFor="guests" className="text-wedding-coral font-medium">
                          Number of Guests (including yourself)
                        </Label>
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          max={currentGuest?.invited_guests || 1}
                          value={formData.guests}
                          onChange={(e) => handleInputChange('guests', e.target.value)}
                          className="mt-1 border-wedding-peach focus:border-wedding-coral"
                        />
                      </div>

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
