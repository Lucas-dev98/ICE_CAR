import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#inicio" className="logo">
                <span className="logo-icon">❄️</span>
                <span className="logo-text">ICE<strong>CAR</strong></span>
              </a>
              <p>Especialistas em ar-condicionado automotivo há 21 anos. Qualidade, tecnologia e confiança para manter você sempre na temperatura ideal.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📱</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="WhatsApp">💬</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#inicio">➜ Início</a></li>
                <li><a href="#sobre">➜ Sobre Nós</a></li>
                <li><a href="#servicos">➜ Serviços</a></li>
                <li><a href="#diferenciais">➜ Diferenciais</a></li>
                <li><a href="#contato">➜ Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">➜ Recarga de Gás</a></li>
                <li><a href="#servicos">➜ Manutenção Preventiva</a></li>
                <li><a href="#servicos">➜ Diagnóstico Digital</a></li>
                <li><a href="#servicos">➜ Higienização</a></li>
                <li><a href="#servicos">➜ Instalação</a></li>
                <li><a href="#servicos">➜ Troca de Filtro</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contato</h4>
              <div className="footer-contact-list">
                <p>📍 Av. Carlos Lindenberg, 2653 - Planalto, Vila Velha - ES, 29118-376</p>
                <p>☎️ (27) 99875-5751</p>
                <p>💬 (27) 99875-5751</p>
                <p>🕐 Seg–Sex: 8h–18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 ICE CAR. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para o melhor serviço automotivo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
