import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Wedding Details', path: '/details' },
    // { label: 'Our Story', path: '/story' },
    { label: 'Photos', path: '/photos' },
    { label: 'Things To Do', path: '/things-to-do' },
    { label: 'Registry', path: '/registry' },
    { label: 'FAQ', path: '/faq' },
    { label: 'RSVP', path: '/rsvp' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-wedding-peach">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/L_A logo.svg" alt="L & A Logo" className="w-6 h-6" />
            {/* <span className="font-serif text-xl font-semibold text-wedding-coral">L & A</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-wedding-coral transition-colors duration-200 font-medium ${
                  isActive(item.path) ? 'text-wedding-coral border-b-2 border-wedding-coral' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-left text-lg text-gray-700 hover:text-wedding-coral transition-colors duration-200 font-medium ${
                        isActive(item.path) ? 'text-wedding-coral' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
