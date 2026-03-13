import './Diferenciais.css';

const Diferenciais = () => {
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
      </div>
    </section>
  );
};

export default Diferenciais;
