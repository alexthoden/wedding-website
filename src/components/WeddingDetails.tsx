
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WeddingDetails = () => {
  return (
    <section id="details" className="py-20 bg-gradient-to-br from-wedding-cream to-wedding-blush">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-rose mb-12">
            Wedding Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-blush shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-wedding-rose rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-wedding-rose mb-4">Ceremony</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5 text-wedding-sage" />
                    <span>Friday, August 28, 2026</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-sage" />
                    <span>4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-sage" />
                    <span>Sunset Gardens Chapel</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    19729 Ridgeside Rd<br />
                    Bluemont, VA 20135
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-blush shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-wedding-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-wedding-sage mb-4">Reception</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5 text-wedding-rose" />
                    <span>Saturday, August 28, 2026</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-wedding-rose" />
                    <span>6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-wedding-rose" />
                    <span>Sunset Gardens Pavilion</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Same location as ceremony<br />
                    Dinner, dancing & celebration
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-wedding-blush">
            <h3 className="font-serif text-xl font-semibold text-wedding-rose mb-4">Dress Code</h3>
            <p className="text-gray-700">
              Cocktail attire requested. We suggest garden party elegant - think flowing dresses, 
              linen suits, and comfortable shoes for dancing under the stars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
