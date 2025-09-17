import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Index"; 
import NotFound from "@/pages/NotFound";
import Demo from "@/components/Demo";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import LoginPage from "@/components/login";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
