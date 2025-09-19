import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Homepage/Index"; 
import NotFound from "@/pages/NotFound";
import Demo from "@/pages/Demo";
import Result from "@/pages/Result";

import { ThemeProvider } from "@/components/provider/ThemeProvider";
import LoginPage from "@/components/login";
import { Toaster } from "@/components/ui/sonner";

import {
  Cursor,
  CursorProvider,
} from "@/components/ui/shadcn-io/animated-cursor";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Toaster />
        <CursorProvider>
          <Cursor>
            <svg
              className="size-6 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </Cursor>
        </CursorProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
