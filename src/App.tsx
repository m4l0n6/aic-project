import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/components/provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
