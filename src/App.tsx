
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FloatingElements } from "./components/FloatingElements";
import { useEffect } from "react";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  // Load LinkedIn badge script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <FloatingElements />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
