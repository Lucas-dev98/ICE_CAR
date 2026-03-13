import { useEffect, useState } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          ↑
        </button>
      )}

      <a href="https://wa.me/5500000000000" className="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        💬
        <span className="whatsapp-pulse"></span>
      </a>
    </>
  );
};

export default FloatingButtons;
