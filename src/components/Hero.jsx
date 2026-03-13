import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
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

    for (let i = 0; i < 18; i++) createParticle();
    const interval = setInterval(createParticle, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1"></div>
        <div className="hero-orb hero-orb--2"></div>
        <div className="hero-particles" ref={particlesRef}></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            🏆 21 Anos de Excelência no Mercado
          </div>

          <h1>
            Especialistas em<br />
            <span className="highlight">Ar-Condicionado</span><br />
            Automotivo
          </h1>

          <p>
            Tecnologia, qualidade e confiança para manter você sempre na temperatura ideal.
            Atendimento especializado com mais de duas décadas de experiência comprovada.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary btn-lg">
              📅 Agendar Serviço
            </a>
            <a href="#servicos" className="btn btn-outline btn-lg">
              🔧 Nossos Serviços
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>21+</strong>
              <span>Anos de Mercado</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <strong>5.000+</strong>
              <span>Clientes Atendidos</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <strong>98%</strong>
              <span>Satisfação</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-icon">💨</div>
            <div className="hero-card-temp">
              <span className="temp-value">18°C</span>
              <span className="temp-label">Temperatura Ideal</span>
            </div>
            <div className="hero-card-features">
              <div className="hero-feature">
                ✓ Recarga de Gás R134a / R1234yf
              </div>
              <div className="hero-feature">
                ✓ Manutenção Preventiva Completa
              </div>
              <div className="hero-feature">
                ✓ Diagnóstico Digital Avançado
              </div>
              <div className="hero-feature">
                ✓ Garantia em Todos os Serviços
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
