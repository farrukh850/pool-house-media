import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../animations.css';

function Layout({ children, onTogglePriceGuide }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const fromHomepage = location.state?.fromHomepage;

  // Don't wrap homepage with header/footer since it has its own
  if (isHomePage) {
    return <>{children}</>;
  }

  return (
    <div className={`bg-black min-h-screen ${fromHomepage ? 'slide-animation' : ''}`}>
      <Header onTogglePriceGuide={onTogglePriceGuide} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
