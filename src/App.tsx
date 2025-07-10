
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import StoryPage from "./pages/StoryPage";
import PhotosPage from "./pages/PhotosPage";
import FAQPage from "./pages/FAQPage";
import RSVPPage from "./pages/RSVPPage";
import NotFound from "./pages/NotFound";
import Registry from "./pages/Registry";
import DetailsPage from "./pages/DetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/photos" element={<PhotosPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/rsvp" element={<RSVPPage />} />
              <Route path="/registry" element={<Registry/>} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
