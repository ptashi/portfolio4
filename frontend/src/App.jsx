// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DevPage from "./pages/DevPage";
import ActorPage from "./pages/ActorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dev" element={<DevPage />} />
          <Route path="/actor" element={<ActorPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;