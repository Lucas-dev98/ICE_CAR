import { useState, useEffect, useCallback } from 'react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    veiculo: '',
    servico: '',
    mensagem: '',
  });

  // Função para verificar se está aberto agora
  const getOpenStatus = useCallback(() => {
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
  }, []);

  const [openStatus, setOpenStatus] = useState(getOpenStatus());

  // Atualizar status a cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenStatus(getOpenStatus());
    }, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, [getOpenStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      let v = value.replace(/\D/g, '').substring(0, 11);
      if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d+)$/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d+)$/, '($1) $2');
      }
      setFormData(prev => ({ ...prev, [name]: v }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      alert('Por favor, preencha os campos obrigatórios (Nome e Telefone)');
      return;
    }

    // Criar mensagem formatada para o WhatsApp
    let mensagem = `Olá! Gostaria de solicitar um serviço.\n\n`;
    mensagem += `*Nome:* ${formData.nome}\n`;
    mensagem += `*Telefone:* ${formData.telefone}\n`;
    
    if (formData.email.trim()) {
      mensagem += `*E-mail:* ${formData.email}\n`;
    }
    
    if (formData.veiculo.trim()) {
      mensagem += `*Veículo:* ${formData.veiculo}\n`;
    }
    
    if (formData.servico) {
      mensagem += `*Serviço:* ${formData.servico}\n`;
    }
    
    if (formData.mensagem.trim()) {
      mensagem += `\n*Mensagem:*\n${formData.mensagem}\n`;
    }

    // Codificar a mensagem e redirecionar para o WhatsApp
    const whatsappURL = `https://wa.me/5527998755751?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');

    // Limpar o formulário
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      veiculo: '',
      servico: '',
      mensagem: '',
    });
  };

  return (
    <section id="contato" className="contato">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-label">Fale Conosco</div>
          <h2>Entre em <span className="highlight">Contato</span></h2>
          <p>Agende seu serviço, solicite um orçamento ou tire suas dúvidas</p>
        </div>

        <div className="contato-grid">
          <div className="contato-info" data-animate="fade-left">
            <div className="contact-items">
              <a href="tel:+5527998755751" className="contact-item contact-item-quick">
                <div className="contact-item-icon">☎️</div>
                <div>
                  <strong>Ligue Agora</strong>
                  <span>(27) 99875-5751</span>
                </div>
              </a>

              <a href="https://wa.me/5527998755751" className="contact-item contact-item-quick contact-item-whatsapp" target="_blank" rel="noopener">
                <div className="contact-item-icon whatsapp-icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>(27) 99875-5751</span>
                </div>
              </a>
            </div>

            <div className="contact-highlight hours-highlight">
              <div className="highlight-item">
                <div className="highlight-icon">🕐</div>
                <div className="highlight-content">
                  <h4>Horário de Funcionamento</h4>
                  <p>
                    <span className={`hours-status ${openStatus.isOpen ? 'open' : 'closed'}`}>
                      {openStatus.message}
                    </span>
                  </p>
                  <p>Seg-Sex: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="contact-highlight">
              <div className="highlight-item">
                <div className="highlight-icon">📍</div>
                <div className="highlight-content">
                  <h4>Nossa Localização</h4>
                  <p>Av. Carlos Lindenberg, 2653<br/>Planalto, Vila Velha - ES</p>
                  <a href="https://maps.google.com/?q=Av.+Carlos+Lindenberg,+2653+Vila+Velha" target="_blank" rel="noopener" className="map-link">
                    Ver no mapa →
                  </a>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="Localização ICE CAR"
                width="100%"
                height="300"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.0631234567896!2d-40.28964!3d-20.34166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19bdb8f5e8e8e8e9%3A0x1234567890abcdef!2sAv.%20Carlos%20Lindenberg%2C%202653%20-%20Planalto%2C%20Vila%20Velha%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contato-form" data-animate="fade-right">
            <div className="form-header">
              <h3>Solicite seu Orçamento</h3>
              <p>Orçamento 100% Grátis</p>
              <div className="form-benefits">
                <div className="benefit-item">✓ Diagnóstico incluído</div>
                <div className="benefit-item">✓ Sem compromisso</div>
                <div className="benefit-item">✓ Técnicos experientes</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="veiculo">Veículo (Marca / Modelo / Ano)</label>
                <input
                  type="text"
                  id="veiculo"
                  name="veiculo"
                  placeholder="Ex: Honda Civic 2022"
                  value={formData.veiculo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="servico">Serviço Desejado</label>
                <select id="servico" name="servico" value={formData.servico} onChange={handleChange}>
                  <option value="">Selecione um serviço...</option>
                  <option value="recarga">Recarga de Gás</option>
                  <option value="manutencao">Manutenção Preventiva</option>
                  <option value="diagnostico">Diagnóstico Digital</option>
                  <option value="higienizacao">Higienização</option>
                  <option value="instalacao">Instalação</option>
                  <option value="filtro">Troca de Filtro</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  placeholder="Descreva o problema ou sua dúvida..."
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                ✦ Solicitar Orçamento Gratuito
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
