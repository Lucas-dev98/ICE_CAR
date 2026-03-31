import './Depoimentos.css';
import { useEffect, useRef, useState } from 'react';

const Depoimentos = () => {
  const particlesRef = useRef(null);
  const dragStartX = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

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

  const depoimentos = [
    {
      texto: 'Excelente serviço! O ar-condicionado do meu carro estava com problema há meses, e a ICE CAR resolveu em poucas horas. Profissionalismo e preço justo.',
      autor: 'João Silva',
      desde: 'Cliente desde 2018',
      sigla: 'JS',
      stars: 5,
    },
    {
      texto: 'Super recomendo! Empresa séria, técnicos capacitados e atendimento impecável. Já são 3 anos que trago todos os meus carros para a ICE CAR. Nota 10!',
      autor: 'Maria Andrade',
      desde: 'Cliente desde 2021',
      sigla: 'MA',
      stars: 5,
    },
    {
      texto: 'Melhor assistência técnica da cidade! Diagnóstico preciso, serviço rápido e qualidade garantida. Não levo meu veículo para mais nenhum outro lugar.',
      autor: 'Roberto Costa',
      desde: 'Cliente desde 2019',
      sigla: 'RC',
      stars: 5,
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoplay, depoimentos.length]);

  const handleDotClick = (idx) => {
    setIsAutoplay(false);
    setCurrentIndex(idx);
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const goToPrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (dragStartX.current === null) return;

    const deltaX = e.clientX - dragStartX.current;
    const minDragDistance = 45;

    if (Math.abs(deltaX) >= minDragDistance) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    dragStartX.current = null;
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
  };

  // Resume autoplay after 8 seconds of user interaction
  useEffect(() => {
    if (!isAutoplay) {
      const timer = setTimeout(() => setIsAutoplay(true), 8000);
      return () => clearTimeout(timer);
    }
  }, [isAutoplay]);

  return (
    <section className="depoimentos">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-label">Depoimentos</div>
          <h2>O Que Nossos <span className="highlight">Clientes Dizem</span></h2>
          <p>A satisfação dos nossos clientes é o nosso maior reconhecimento</p>
        </div>

        <div className="testimonials-carousel">
          {/* Carousel Container */}
          <div
            className="carousel-inner"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
          >
            <div className="carousel-slide active">
              {depoimentos[currentIndex] && (
                <div className="testimonial-card" data-animate="fade-up">
                  <div className="testimonial-quote">❝</div>
                  <div className="stars">
                    {[...Array(depoimentos[currentIndex].stars)].map((_, i) => <span key={i}>⭐</span>)}
                  </div>
                  <p>{depoimentos[currentIndex].texto}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{depoimentos[currentIndex].sigla}</div>
                    <div className="author-info">
                      <strong>{depoimentos[currentIndex].autor}</strong>
                      <span>{depoimentos[currentIndex].desde}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="carousel-dots">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
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

export default Depoimentos;
