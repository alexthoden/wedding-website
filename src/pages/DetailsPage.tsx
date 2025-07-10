import { Calendar, MapPin, Clock, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DetailsPage = () => {
  return (
    <section className="py-20 min-h-screen relative">
      {/* Stationary flower background at the bottom, full width, dimmed */}
      <img
        src="/images/test_flowers.png"
        alt="flowers background"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100vw',
          minWidth: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              Wedding Details
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about our special day.
              Don't yell at me, this is just a draft :(
            </p>
          </div>

          <div className="space-y-8">
            {/* Welcome Party */}
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Welcome Party</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-xl font-semibold text-wedding-sage">August 27, 2026</p>
                  <p className="text-gray-600">Thursday</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">7:00 PM</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">Bluemont</p>
                </div>
                {/* <p className="text-gray-600">12729 Ridgeside Rd, Bluemont, VA 20135</p> */}
              </CardContent>
            </Card>

            {/* Ceremony */}
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Ceremony</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-xl font-semibold text-wedding-sage">August 28, 2026</p>
                  <p className="text-gray-600">Friday</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">5:00 PM</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">Bluemont</p>
                </div>
                {/* <p className="text-gray-600">12729 Ridgeside Rd, Bluemont, VA 20135</p> */}
              </CardContent>
            </Card>

            {/* Cocktail Hour & Reception */}
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Cocktail Hour & Reception</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-xl font-semibold text-wedding-sage">August 28, 2026</p>
                  <p className="text-gray-600">Following ceremony</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">5:30 PM - 11:00 PM</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-wedding-coral" />
                  <p className="text-lg">Banquet Hall</p>
                </div>
                {/* <p className="text-gray-600">Same location</p> */}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl text-wedding-coral">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-sage mb-2">Dress Code</h4>
                  <p className="text-gray-700">Garden party formal - think floral prints, and pastels!</p>
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
      </div>
    </section>
  );
};

export default DetailsPage;
