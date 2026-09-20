// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { devFooterLinks, actorFooterLinks } from "./data/footerData"

import ContactPage from "./pages/ContactPage"
import DevPage from "./pages/DevPage";
import ActorPage from "./pages/ActorPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dev" element={<DevPage />} />
          <Route path="/actor" element={<ActorPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <Routes>
        <Route path="/dev" element={<Footer links={devFooterLinks} />} />
        <Route path="/act" element={<Footer links={actorFooterLinks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
