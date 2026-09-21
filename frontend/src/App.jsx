// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { devFooterLinks, actorFooterLinks } from "./data/footerData"

import ContactPage from "./pages/ContactPage"
import DevPage from "./pages/DevPage";
import ActorPage from "./pages/ActorPage";
import HomePage from "./pages/HomePage"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dev" element={<DevPage />} />
          <Route path="/actor" element={<ActorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Routes>
        <Route path="/dev" element={<Footer links={devFooterLinks} />} />
        <Route path="/actor" element={<Footer links={actorFooterLinks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
