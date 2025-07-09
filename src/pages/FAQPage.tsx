
import { HelpCircle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQPage = () => {
  const faqs = [
    {
      question: "What should I wear?",
      answer: "We suggest garden party attire - think floral prints, pastels, and comfortable shoes for walking on grass. The ceremony will be outdoors, so dress accordingly for the weather."
    },
    {
      question: "Where should I park?",
      answer: "Free parking is available on-site with The View at Bluemont. There will be a shuttle service for those staying at the hotel as well."
    },
    {
      question: "What time should I arrive?",
      answer: "Please arrive by 4:45 PM for the 5:00 PM ceremony. This will give you time to find your seat and enjoy the pre-ceremony atmosphere."
    },
    {
      question: "Is the wedding indoors or outdoors?",
      answer: "The ceremony will be outdoors unless it rains, in which case it will be moved indoors. The reception and cocktail hour will both be held indoors so no need to have an umbrella ready!"
    },
    {
      question: "Can I bring a plus-one?",
      answer: "We have planned this celebration based on our guest list. Please check your invitation for the number of guests invited. If you have questions, feel free to reach out to Alex directly."
    },
    {
      question: "Will there be food and drinks?",
      answer: "Yes! We'll have a full dinner service followed by dancing and celebration. We will plan to accommodate dietary restrictions - please let us know when you RSVP."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Please let us know about any dietary restrictions when you RSVP, and we'll make sure to accommodate your needs."
    },
    {
      question: "Is there a gift registry?",
      answer: "Your presence is the greatest gift! If you'd like to give something, we have a registry available in the menu at the top of the page."
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "Please DO NOT take photos during the ceremony! We are paying good money for a professional to take pictures and your dinky phones don't compare! Please feel free to take photos during the reception though! Below is a QR Code for everyone to contribute to a shared album of the night!"
    },
    {
      question: "What time will the reception end?",
      answer: "The reception will run from 6:30 PM to 11:00 PM, with plenty of time for dinner, dancing, and celebration!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-wedding-cream to-wedding-peach min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <HelpCircle className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our wedding day</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-wedding-coral flex items-center gap-3">
                    <Heart className="w-5 h-5 text-wedding-sage" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white/90 backdrop-blur-sm border-wedding-peach shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-wedding-coral mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any other questions about our wedding day, 
                  please don't hesitate to reach out to Alex directly.
                </p>
                <p className="text-wedding-sage font-medium">
                  We can't wait to celebrate with you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
