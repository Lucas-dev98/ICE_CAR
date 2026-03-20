import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);
  const [openStatus, setOpenStatus] = useState({ isOpen: false, message: '' });

  // Função para verificar se está aberto agora
  const getOpenStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    let isOpen = false;
    let message = '';

    // Verifica se é sábado (6) ou domingo (0) - sempre fechado
    if (day === 0 || day === 6) {
      message = 'Fechado - Reabre segunda às 8h';
      isOpen = false;
    } 
    // Segunda a Sexta - 8h às 18h
    else if (currentTime >= 8 && currentTime < 18) {
      message = 'Aberto Agora';
      isOpen = true;
    } 
    else if (currentTime < 8) {
      message = 'Fechado - Abre às 8h';
      isOpen = false;
    } 
    else {
      // Depois das 18h
      message = 'Fechado - Reabre amanhã às 8h';
      isOpen = false;
    }

    return { isOpen, message };
  };

  useEffect(() => {
    setOpenStatus(getOpenStatus());
    const interval = setInterval(() => {
      setOpenStatus(getOpenStatus());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);

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

    for (let i = 0; i < 0; i++) createParticle();
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
          </div>

          <div className="hero-info-card">
            <div className="info-card-row">
              <div className="info-card-stat">
                <strong>5.000+</strong>
                <span>Clientes</span>
              </div>
              <div className="info-card-divider"></div>
              <div className="info-card-stat">
                <strong>21+</strong>
                <span>Anos</span>
              </div>
            </div>

            <div className="info-card-row">
              <div className="info-card-item">
                <span>📍</span>
                <div>
                  <strong>Localização</strong>
                  <p>Av. Carlos Lindenberg, 2653</p>
                </div>
              </div>
            </div>

            <div className="info-card-row">
              <div className="info-card-item">
                <span>🕐</span>
                <div>
                  <strong>{openStatus.message}</strong>
                  <p>Seg-Sex: 8h às 18h</p>
                </div>
              </div>
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
                ✓ Diagnóstico Digital Avançado
              </div>
              <div className="hero-feature">
                ✓ Manutenção Preventiva
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
