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

      <a href="https://wa.me/5527998755751" className="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg className="whatsapp-float-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 8.034 0C3.593 0-.002 3.592 0 8.033a7.94 7.94 0 0 0 1.347 4.442L.065 16l3.662-1.252a7.94 7.94 0 0 0 4.307 1.249h.003c4.44 0 8.034-3.592 8.034-8.033a7.93 7.93 0 0 0-2.47-5.638zM8.034 14.66a6.61 6.61 0 0 1-3.368-.92l-.242-.145-2.173.743.724-2.118-.157-.248a6.59 6.59 0 0 1-1.013-3.522c.002-3.65 2.972-6.62 6.63-6.62a6.58 6.58 0 0 1 4.688 1.94 6.58 6.58 0 0 1 1.944 4.69c-.002 3.65-2.972 6.62-6.633 6.62z" />
          <path d="M11.815 9.358c-.198-.099-1.17-.578-1.352-.644-.181-.066-.313-.099-.445.1-.132.198-.511.644-.627.776-.115.132-.23.149-.428.05-.198-.099-.837-.308-1.595-.983-.59-.525-.99-1.174-1.105-1.372-.115-.198-.012-.305.087-.404.09-.089.198-.23.297-.346.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.161-.387-.325-.335-.445-.341-.115-.006-.247-.007-.379-.007a.73.73 0 0 0-.528.248c-.182.198-.693.677-.693 1.653 0 .975.709 1.917.808 2.049.099.132 1.397 2.133 3.386 2.99.473.204.842.326 1.13.417.475.151.908.13 1.25.079.381-.057 1.17-.479 1.336-.942.165-.462.165-.859.115-.942-.05-.082-.181-.132-.379-.231z" />
        </svg>
        <span className="whatsapp-pulse"></span>
      </a>
    </>
  );
};

export default FloatingButtons;
