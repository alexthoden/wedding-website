
import { Heart } from 'lucide-react';

const StoryPage = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-12">
            Our Love Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="bg-wedding-peach p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-wedding-coral mb-3">How We Met</h3>
                <p className="text-gray-700 leading-relaxed">
                  It was a rainy Tuesday at the local coffee shop. Lauren was reading her favorite book, 
                  and Alex accidentally spilled his latte on her table. What started as an embarrassing 
                  moment turned into hours of conversation and the beginning of our beautiful journey together.
                </p>
              </div>
              
              <div className="bg-wedding-cream p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-wedding-sage mb-3">The Proposal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Three years later, Alex took Lauren back to that same coffee shop. But this time, 
                  instead of spilling coffee, he got down on one knee and asked her to be his forever. 
                  Of course, she said yes!
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-wedding-peach to-wedding-cream rounded-lg h-96 flex items-center justify-center">
                <Heart className="w-24 h-24 text-wedding-coral/30" />
              </div>
              <div className="absolute -top-4 -right-4 bg-wedding-lavender rounded-full w-12 h-12 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPage;
