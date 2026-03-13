import './Sobre.css';
import { useState, useEffect, useRef } from 'react';

const Sobre = () => {
  const [animatedNiveis, setAnimatedNiveis] = useState({});
  const competenciasRef = useRef(null);

  const timeline = [
    { 
      ano: '2004', 
      evento: 'Fundação da ICE CAR',
      descricao: 'Iniciativa pioneira em climatização automotiva na região'
    },
    { 
      ano: '2008', 
      evento: 'Expansão e novos equipamentos',
      descricao: 'Investimento em tecnologia diagnóstica de ponta'
    },
    { 
      ano: '2015', 
      evento: 'Certificação ISO - Qualidade',
      descricao: 'Reconhecimento internacional de excelência operacional'
    },
    { 
      ano: '2023', 
      evento: 'Diagnóstico Digital avançado',
      descricao: 'Integração de IA para diagnósticos mais precisos'
    },
  ];

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

  const competencias = [
    { label: 'Qualidade', nivel: 98 },
    { label: 'Tecnologia', nivel: 95 },
    { label: 'Atendimento', nivel: 99 },
    { label: 'Confiabilidade', nivel: 100 },
  ];

  // Animar barras de competência quando entram em viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            competencias.forEach((comp, idx) => {
              setTimeout(() => {
                setAnimatedNiveis((prev) => ({
                  ...prev,
                  [idx]: comp.nivel,
                }));
              }, idx * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (competenciasRef.current) {
      observer.observe(competenciasRef.current);
    }

    return () => {
      if (competenciasRef.current) {
        observer.unobserve(competenciasRef.current);
      }
    };
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
            <h2>Referência em Climatização Automotiva há <span className="highlight">21 Anos</span></h2>
            <p>
              Desde 2004, a ICE CAR consolidou-se como referência de confiabilidade e excelência no mercado de climatização automotiva. 
              Com mais de duas décadas de experiência, acumulamos conhecimento técnico profundo e expertise que nos permite oferecer 
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
                <span>21 anos servindo com dedicação, profissionalismo e inovação contínua</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="sobre-timeline" data-animate="fade-up">
          <h3>Nossa Trajetória de Evolução</h3>
          <div className="timeline">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-ano">{item.ano}</span>
                  <span className="timeline-evento">{item.evento}</span>
                </div>
              </div>
            ))}
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

        {/* Competências */}
        <div className="sobre-competencias" ref={competenciasRef} data-animate="fade-up">
          <div className="section-header-inline">
            <h3>Nossas Competências</h3>
            <p>Excelência em cada aspecto do negócio</p>
          </div>
          <div className="competencias-grid">
            {competencias.map((comp, idx) => (
              <div key={idx} className="competencia-item">
                <div className="competencia-header">
                  <span>{comp.label}</span>
                  <span className="competencia-percent">{animatedNiveis[idx] || 0}%</span>
                </div>
                <div className="competencia-bar">
                  <div className="competencia-fill" style={{ width: `${animatedNiveis[idx] || 0}%` }}></div>
                </div>
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
    </section>
  );
};

export default Sobre;
