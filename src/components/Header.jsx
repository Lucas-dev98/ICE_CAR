import { forwardRef, useState } from 'react';
import './Header.css';

const Header = forwardRef(function Header(props, ref) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  return (
    <header id="header" ref={ref}>
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#inicio" className="logo" onClick={(e) => scrollToSection(e, 'inicio')}>
            <span className="logo-icon">❄️</span>
            <span className="logo-text">ICE<strong>CAR</strong></span>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Início</a></li>
            <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre</a></li>
            <li><a href="#servicos" onClick={(e) => scrollToSection(e, 'servicos')}>Serviços</a></li>
            <li><a href="#diferenciais" onClick={(e) => scrollToSection(e, 'diferenciais')}>Diferenciais</a></li>
            <li><a href="#contato" onClick={(e) => scrollToSection(e, 'contato')}>Contato</a></li>
          </ul>

          <a href="#contato" className="btn btn-primary nav-cta" onClick={(e) => scrollToSection(e, 'contato')}>
            📅 Solicitar Orçamento
          </a>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
});

export default Header;
