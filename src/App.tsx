import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sooner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/IndexRefactored";
import CampaignsPage from "./pages/CampaignsPage";
import VisionPage from "./pages/VisionPage";
import JoinUsPage from "./pages/JoinUsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Volunteer from "./pages/Volunteer";
import Partner from "./pages/Partner";
import VotePage from "./pages/VotePage";
import VotePollPage from "./pages/VotePollPage";
import EventsPage from "./pages/EventsPage";
import ResourcesPage from "./pages/ResourcesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/TBG">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/vote/:pollId" element={<VotePollPage />} />
          <Route path="/v/:pollId" element={<VotePollPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
