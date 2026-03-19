import './Diferenciais.css';
import { useEffect, useRef } from 'react';

const Diferenciais = () => {
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
  const diferenciais = [
    { icon: '🏆', title: 'Experiência Comprovada', desc: '21 anos de atuação no mercado com histórico sólido de qualidade e satisfação dos nossos clientes.' },
    { icon: '🔧', title: 'Tecnologia Avançada', desc: 'Equipamentos de última geração para diagnóstico e manutenção com precisão, agilidade e eficiência.' },
    { icon: '👔', title: 'Técnicos Certificados', desc: 'Equipe constantemente treinada e atualizada com as mais novas tecnologias e normas do setor automotivo.' },
    { icon: '🛡️', title: 'Garantia nos Serviços', desc: 'Todos os serviços realizados com garantia documentada e suporte pós-atendimento para sua total tranquilidade.' },
    { icon: '⚡', title: 'Atendimento Rápido', desc: 'Agilidade no atendimento e entrega no prazo combinado, sem nunca comprometer a qualidade dos serviços.' },
    { icon: '💰', title: 'Preço Justo', desc: 'Orçamento transparente e valores competitivos, sem taxas ocultas ou cobranças indevidas ao cliente.' },
  ];

  return (
    <section id="diferenciais" className="diferenciais">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-label">Por Que Nos Escolher</div>
          <h2>Nossos <span className="highlight">Diferenciais</span></h2>
          <p>O que nos torna a melhor escolha para o sistema de climatização do seu veículo</p>
        </div>

        <div className="diferenciais-grid">
          {diferenciais.map((dif, idx) => (
            <div key={idx} className="diferencial-card" data-animate="fade-up">
              <div className="diferencial-icon">{dif.icon}</div>
              <div className="diferencial-content">
                <h3>{dif.title}</h3>
                <p>{dif.desc}</p>
              </div>
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

export default Diferenciais;
