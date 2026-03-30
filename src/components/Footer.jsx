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
                <a href="https://wa.me/5527998755751" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
                  <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 8.034 0C3.593 0-.002 3.592 0 8.033a7.94 7.94 0 0 0 1.347 4.442L.065 16l3.662-1.252a7.94 7.94 0 0 0 4.307 1.249h.003c4.44 0 8.034-3.592 8.034-8.033a7.93 7.93 0 0 0-2.47-5.638zM8.034 14.66a6.61 6.61 0 0 1-3.368-.92l-.242-.145-2.173.743.724-2.118-.157-.248a6.59 6.59 0 0 1-1.013-3.522c.002-3.65 2.972-6.62 6.63-6.62a6.58 6.58 0 0 1 4.688 1.94 6.58 6.58 0 0 1 1.944 4.69c-.002 3.65-2.972 6.62-6.633 6.62z" />
                    <path d="M11.815 9.358c-.198-.099-1.17-.578-1.352-.644-.181-.066-.313-.099-.445.1-.132.198-.511.644-.627.776-.115.132-.23.149-.428.05-.198-.099-.837-.308-1.595-.983-.59-.525-.99-1.174-1.105-1.372-.115-.198-.012-.305.087-.404.09-.089.198-.23.297-.346.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.161-.387-.325-.335-.445-.341-.115-.006-.247-.007-.379-.007a.73.73 0 0 0-.528.248c-.182.198-.693.677-.693 1.653 0 .975.709 1.917.808 2.049.099.132 1.397 2.133 3.386 2.99.473.204.842.326 1.13.417.475.151.908.13 1.25.079.381-.057 1.17-.479 1.336-.942.165-.462.165-.859.115-.942-.05-.082-.181-.132-.379-.231z" />
                  </svg>
                </a>
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
                  <div>
                    <a href="tel:+552733599740" className="contact-phone-link">
                      Fixo: (27) 3359-9740
                    </a>
                  </div>
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
