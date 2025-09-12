import { MapPin, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThingsToDoPage = () => {
  const recommendations = {
    Leesburg: [
      {
        title: "Downtown Leesburg",
        description: "Explore historic Leesburg with its charming shops, restaurants, and local breweries. Need ideas?",
        link: null
      }
    ],
    Bluemont: [
      {
        title: "More Better Beer",
        description: "A Beer Garden with European flaIr & American interests",
        link: "https://www.morebetterbeer.com/"
      },
      {
        title: "Bluemont Vineyard",
        description: "Enjoy wine tasting and beautiful views at Bluemont Vineyard, just minutes from the venue!",
        link: "https://www.bluemontvineyard.com/"
      },
      {
        title: "Dirt Farm Brewing",
        description: "Sample craft beers and enjoy the mountain views.",
        link: "https://dirtfarmbrewing.com/"
      },
      {
        title: "Bear Chase Brewing Company",
        description: "Another great local brewery to check out.",
        link: "https://www.morebetterbeer.com/"
      },
      {
        title: "Raven Rocks Hike (Appalachian Trail)",
        description: "Scenic hiking trail with beautiful overlooks.",
        link: "https://myhikes.org/trails/raven-rocks-via-appalachian-trail"
      },
      {
        title: "Great Country Farms",
        description: "A fun spot for families and kids with farm activities, fresh produce, and seasonal events.",
        link: null
      }
    ],
    Other: [
      {
        title: "Harpers Ferry National Historical Park",
        description: "Explore history, hiking, and beautiful scenery at Harpers Ferry.",
        link: "https://www.nps.gov/hafe/index.htm"
      },
      {
        title: "Antique Shopping",
        description: "Discover unique finds at antique shops throughout Loudoun County.",
        link: "https://www.luckettstore.com"
      }
    ]
  };

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
            <div className="mb-6">
              <MapPin className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              Things To Do Nearby
            </h2>
            <p className="text-gray-600 text-lg">Make the most of your visit with these local attractions and activities!</p>
          </div>

          {/* Organized by location */}
          {Object.entries(recommendations).map(([location, items]) => (
            <div key={location} className="mb-10">
              <h3 className="font-serif font-bold text-3xl text-wedding-coral mb-8 text-center"></h3>
              <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-wedding-coral flex items-center gap-3 justify-center">
                    <PartyPopper className="w-5 h-5 text-wedding-sage" />
                    {location} Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {items.map((item, idx) => (
                      <li key={item.title}>
                        <span className="font-semibold text-lg text-wedding-coral">{item.title}:</span>
                        <span className="text-gray-700 ml-2">{item.description}</span>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-wedding-coral underline ml-2">Learn more</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}

          <div className="mt-12 text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-wedding-coral mb-4">
                  Have More Suggestions?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you know of other great things to do in the area, let us know so we can share with other guests!
                </p>
                <p className="text-wedding-sage font-medium">
                  We hope you enjoy your stay!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoPage;
