import './Servicos.css';

const Servicos = () => {
  const servicos = [
    { id: 1, icon: '⛽', title: 'Recarga de Gás', desc: 'Reabastecimento do fluido refrigerante (R134a ou R1234yf) com equipamentos modernos, certificados e calibrados com precisão.' },
    { id: 2, icon: '🔧', title: 'Manutenção Preventiva', desc: 'Revisão completa do sistema de ar-condicionado para evitar problemas futuros e garantir eficiência máxima no verão.', featured: true },
    { id: 3, icon: '💻', title: 'Diagnóstico Digital', desc: 'Análise computadorizada para identificação precisa de falhas no sistema de climatização, com laudo técnico detalhado.' },
    { id: 4, icon: '🌫️', title: 'Higienização', desc: 'Limpeza profunda do sistema de ar-condicionado, eliminando fungos, bactérias e mau odor para um ar mais saudável.' },
    { id: 5, icon: '⚙️', title: 'Instalação', desc: 'Instalação de novos sistemas de ar-condicionado automotivo com garantia, suporte técnico e peças de qualidade.' },
    { id: 6, icon: '🔘', title: 'Troca de Filtro', desc: 'Substituição do filtro de cabine para garantir ar limpo, filtrado e saudável no interior do seu veículo.' },
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
      </div>
    </section>
  );
};

export default Servicos;
