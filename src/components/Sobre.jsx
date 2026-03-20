import './Sobre.css';
import { useEffect, useRef } from 'react';

const Sobre = () => {
  const particlesRef = useRef(null);

  const valores = [
    {
      icon: '🎯',
      titulo: 'Missão',
      descricao: 'Proporcionar soluções em climatização automotiva com excelência técnica, atendimento personalizado e comprometimento total com a satisfação do cliente e a sustentabilidade ambiental.'
    },
    {
      icon: '⭐',
      titulo: 'Visão',
      descricao: 'Ser reconhecida como a principal referência em climatização automotiva da região, destacando-se pela inovação tecnológica, confiabilidade e excelência nos serviços.'
    },
    {
      icon: '❤️',
      titulo: 'Valores',
      descricao: 'Ética profissional, transparência absoluta, responsabilidade social, inovação contínua e compromisso permanente com o desenvolvimento técnico e humano.'
    }
  ];

  // Criar partículas de neve
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      const el = document.createElement('div');
      el.className = 'particle';
      el.innerHTML = '❄️';
      
      const size = Math.random() * 14 + 7;
      const left = Math.random() * 100;
      const duration = Math.random() * 14 + 10;
      const delay = Math.random() * 8;

      el.style.cssText = `
        left: ${left}%;
        font-size: ${size}px;
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
      `;

      particlesRef.current.appendChild(el);
      setTimeout(() => el.remove(), (duration + delay) * 1000);
    };

    for (let i = 0; i < 12; i++) createParticle();
    const interval = setInterval(createParticle, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre" className="sobre">
      <div className="container">
        {/* Parte Visual + Badge */}
        <div className="sobre-grid">
          <div className="sobre-visual" data-animate="fade-left">
            <div className="anos-badge">
              <span className="anos-numero">21</span>
              <span className="anos-texto">Anos de<br />Experiência</span>
            </div>
            <div className="sobre-mini-cards">
              <div className="mini-card">
                <div className="mini-card-icon">🏆</div>
                <div>
                  <strong>Empresa Certificada</strong>
                  <span>Qualidade e credibilidade garantidas</span>
                </div>
              </div>
              <div className="mini-card">
                <div className="mini-card-icon">⚙️</div>
                <div>
                  <strong>Equipamentos Modernos</strong>
                  <span>Tecnologia de última geração</span>
                </div>
              </div>
              <div className="mini-card">
                <div className="mini-card-icon">👨‍🔧</div>
                <div>
                  <strong>Equipe Especializada</strong>
                  <span>Técnicos treinados e certificados</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sobre-content" data-animate="fade-right">
            <div className="section-label">Quem Somos</div>
            <h2>Excelência em <span className="highlight">Climatização Automotiva</span></h2>
            <p>
              A ICE CAR consolidou-se como referência de confiabilidade e excelência no mercado de climatização automotiva. 
              Com sólida experiência, acumulamos conhecimento técnico profundo e expertise que nos permite oferecer 
              diagnósticos precisos, soluções inovadoras e atendimento excepcional a cada cliente.
            </p>
            <p>
              Nossa equipe de técnicos altamente qualificados e certificados está constantemente atualizada com as mais recentes 
              tecnologias em climatização veicular. Utilizamos equipamentos de diagnóstico de ponta e metodologias comprovadas para garantir 
              que seu veículo receba o melhor cuidado possível, com máxima eficiência, durabilidade e segurança em todas as situações.
            </p>

            <div className="highlight-box">
              <div className="highlight-icon">✨</div>
              <div className="highlight-content">
                <strong>Compromisso com Excelência</strong>
                <span>Dedicação, profissionalismo e inovação contínua</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="sobre-valores" data-animate="fade-up">
          <div className="section-header-inline">
            <h3>Nossos Valores Fundamentais</h3>
            <p>Os pilares que nos guiam no dia a dia</p>
          </div>
          <div className="valores-grid">
            {valores.map((valor, idx) => (
              <div key={idx} className="valor-card">
                <div className="valor-icon-large">{valor.icon}</div>
                <h4>{valor.titulo}</h4>
                <p>{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chamada para Ação */}
        <div className="sobre-cta" data-animate="fade-up">
          <div className="cta-content">
            <h3>Confie em Quem Tem Experiência</h3>
            <p>Há mais de duas décadas garantindo conforto, eficiência e segurança nos sistemas de climatização de milhares de veículos</p>
            <div className="cta-buttons">
              <a href="#contato" className="btn btn-primary btn-lg">
                📞 Agende Agora
              </a>
              <a href="#servicos" className="btn btn-outline btn-lg">
                🔧 Conheça os Serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-particles" ref={particlesRef}></div>

      <div className="section-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Sobre;
