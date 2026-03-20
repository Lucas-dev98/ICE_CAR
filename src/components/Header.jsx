import { forwardRef, useState, useEffect } from 'react';
import './Header.css';
import LogoPng from '../assets/logo-icecar.png';

const Header = forwardRef(function Header(props, ref) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80 + 8;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Prevenir scroll quando menu está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Fechar menu ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" ref={ref}>
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#inicio" className="logo" onClick={(e) => scrollToSection(e, 'inicio')}>
              <img src={LogoPng} alt="ICE CAR - Ar Condicionado Automotivo" className="logo-image" />
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`} id="nav-menu">
            <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre</a></li>
            <li><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')}>Serviços</a></li>
            <li><a href="#diferenciais" onClick={(e) => scrollToSection(e, 'diferenciais')}>Diferenciais</a></li>
            <li><a href="#contato" onClick={(e) => scrollToSection(e, 'contato')}>Contato</a></li>
          </ul>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
});

export default Header;
