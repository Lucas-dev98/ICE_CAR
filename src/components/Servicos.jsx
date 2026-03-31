import './Servicos.css';
import { useEffect, useRef } from 'react';

const Servicos = () => {
  const particlesRef = useRef(null);

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
  const servicos = [
    { id: 1, icon: '⛽', title: 'Recarga de Gás', desc: 'Reabastecimento do fluido refrigerante (R134a ou R1234yf) com equipamentos modernos, certificados e calibrados com precisão.' },
    { id: 2, icon: '🔧', title: 'Manutenção Preventiva', desc: 'Revisão completa do sistema de ar-condicionado para evitar problemas futuros e garantir eficiência máxima no verão.', featured: true },
    { id: 3, icon: '💻', title: 'Diagnóstico Digital', desc: 'Análise computadorizada para identificação precisa de falhas no sistema de climatização, com laudo técnico detalhado.' },
    { id: 4, icon: '🌫️', title: 'Higienização', desc: 'Limpeza profunda do sistema de ar-condicionado, eliminando fungos, bactérias e mau odor para um ar mais saudável.' },
    { id: 5, icon: '🔘', title: 'Troca de Filtro', desc: 'Substituição do filtro de cabine para garantir ar limpo, filtrado e saudável no interior do seu veículo.' },
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-label">O Que Oferecemos</div>
          <h2>Nossos <span className="highlight">Serviços</span></h2>
          <p>Soluções completas e especializadas para o sistema de climatização do seu veículo</p>
        </div>

        <div className="services-grid">
          {servicos.map(servico => (
            <div key={servico.id} className={`service-card ${servico.featured ? 'service-card--featured' : ''}`} data-animate="fade-up">
              {servico.featured && <div className="service-featured-badge">Mais Procurado</div>}
              <div className="service-icon">{servico.icon}</div>
              <h3>{servico.title}</h3>
              <p>{servico.desc}</p>
              <a href="#contato" className="service-link">Agendar serviço →</a>
            </div>
          ))}
        </div>

        <div className="section-particles" ref={particlesRef}></div>

        <div className="section-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" fill="#F5F7FA" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
