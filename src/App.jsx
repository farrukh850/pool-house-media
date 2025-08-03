import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import PhotoPage from './pages/PhotoPage';
import ContactPage from './pages/ContactPage';
import PopupForm from './components/PopupForm';

function App() {
  const [isPriceGuideOpen, setIsPriceGuideOpen] = useState(false);

  const togglePriceGuide = () => {
    setIsPriceGuideOpen(!isPriceGuideOpen);
  };

  return (
    <Router>
        <Layout onTogglePriceGuide={togglePriceGuide}>
          <Routes>
            <Route path="/" element={<HomePage onTogglePriceGuide={togglePriceGuide} />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/photo" element={<PhotoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
        
        {/* Price Guide Popup - shared across all pages */}
        <PopupForm isOpen={isPriceGuideOpen} onClose={togglePriceGuide} />
    </Router>
  );
}

export default App;
