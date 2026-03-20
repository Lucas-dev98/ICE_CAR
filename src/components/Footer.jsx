import './Footer.css';
import LogoPng from '../assets/logo-icecar.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <a href="#inicio" className="logo">
                <img src={LogoPng} alt="ICE CAR - Ar Condicionado Automotivo" className="logo-image" />
              </a>
              <p>Especialistas em ar-condicionado automotivo há 21 anos. Qualidade, tecnologia e confiança para manter você sempre na temperatura ideal.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook" title="Facebook">f</a>
                <a href="https://www.instagram.com/jeferson.icecar/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">@</a>
                <a href="#" aria-label="WhatsApp" title="WhatsApp">💬</a>
                <a href="#" aria-label="Telefone" title="Telefone">☎️</a>
              </div>
            </div>

            {/* Services Section */}
            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Recarga de Gás</a></li>
                <li><a href="#servicos">Manutenção Preventiva</a></li>
                <li><a href="#servicos">Diagnóstico Digital</a></li>
                <li><a href="#servicos">Higienização</a></li>
                <li><a href="#servicos">Instalação</a></li>
                <li><a href="#servicos">Troca de Filtro</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-col">
              <h4>Contato</h4>
              <div className="footer-contact-list">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <p>Av. Carlos Lindenberg, 2653</p>
                    <p>Planalto, Vila Velha - ES, 29118-376</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">☎️</span>
                  <a href="https://wa.me/5527998755751" target="_blank" rel="noopener" className="contact-phone-link">
                    (27) 99875-5751
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <p>Seg–Sex: 8h–18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 ICE CAR. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para o melhor serviço automotivo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
