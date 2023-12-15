import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import TestimoniPage from "./pages/TestimoniPage";
import SyaratKeten from "./pages/SyaratKeten";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/testimoni" Component={TestimoniPage} />
        <Route path="/syarat" Component={SyaratKeten} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
