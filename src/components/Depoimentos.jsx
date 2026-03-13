import './Depoimentos.css';

const Depoimentos = () => {
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

  return (
    <section className="depoimentos">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-label">Depoimentos</div>
          <h2>O Que Nossos <span className="highlight">Clientes Dizem</span></h2>
          <p>A satisfação dos nossos clientes é o nosso maior reconhecimento</p>
        </div>

        <div className="testimonials-grid">
          {depoimentos.map((test, idx) => (
            <div key={idx} className="testimonial-card" data-animate="fade-up">
              <div className="testimonial-quote">❝</div>
              <div className="stars">
                {[...Array(test.stars)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p>{test.texto}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{test.sigla}</div>
                <div className="author-info">
                  <strong>{test.autor}</strong>
                  <span>{test.desde}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
