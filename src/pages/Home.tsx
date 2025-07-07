import { Heart, Calendar, MapPin, Clock, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(/images/venue_watercolor.png)' }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-wedding-coral mb-4">
              Lauren & Alex
            </h1>
            
            <div className="w-32 h-0.5 bg-wedding-sage mx-auto mb-6"></div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto shadow-lg border border-wedding-peach">
              <p className="text-lg font-medium text-wedding-sage mb-2">Save the Date</p>
              <p className="text-3xl font-serif font-bold text-wedding-coral mb-2">August 28, 2026</p>
              <p className="text-gray-600">Bluemont, VA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-wedding-cream to-wedding-peach relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url(/images/test_flowers.png)' }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
                Wedding Details
              </h2>
              <p className="text-gray-600 text-lg">Everything you need to know</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
                <CardHeader className="text-center">
                  <Calendar className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
                  <CardTitle className="font-serif text-2xl text-wedding-coral">Ceremony</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-wedding-sage">August 28, 2026</p>
                    <p className="text-gray-600">Friday</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">4:00 PM</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">Bluemont</p>
                  </div>
                  <p className="text-gray-600">12729 Ridgeside Rd, Bluemont, VA 20135</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
                <CardHeader className="text-center">
                  <Camera className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
                  <CardTitle className="font-serif text-2xl text-wedding-coral">Reception</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-xl font-semibold text-wedding-sage">Same Day</p>
                    <p className="text-gray-600">Following ceremony</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">6:00 PM - 11:00 PM</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-coral" />
                    <p className="text-lg">Banquet Hall</p>
                  </div>
                  <p className="text-gray-600">Same location</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Dress Code</h4>
                  <p className="text-gray-700">Garden party attire - think floral prints, pastels, and comfortable shoes for walking on grass.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Weather</h4>
                  <p className="text-gray-700">The ceremony will be outdoors. We'll have umbrellas ready just in case!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Parking</h4>
                  <p className="text-gray-700">Free parking available on-site. Bus service will be provided from hotel block.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
