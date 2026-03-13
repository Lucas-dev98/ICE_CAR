import { useState } from 'react';
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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      alert('Por favor, preencha os campos obrigatórios (Nome e Telefone)');
      return;
    }

    setLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        veiculo: '',
        servico: '',
        mensagem: '',
      });
      
      setTimeout(() => setSuccess(false), 3000);
    }, 1600);
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
            <h3>Informações de Contato</h3>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <strong>Endereço</strong>
                  <span>Rua Exemplo, 123 - Centro<br />Cidade — Estado, CEP 00000-000</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">☎️</div>
                <div>
                  <strong>Telefone</strong>
                  <span>(00) 0000-0000<br />(00) 9 0000-0000</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon whatsapp-icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>(00) 9 0000-0000</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <span>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/5500000000000" className="btn btn-whatsapp" target="_blank" rel="noopener">
              💬 Chamar no WhatsApp
            </a>
          </div>

          <div className="contato-form" data-animate="fade-right">
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

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading && '⏳ Enviando...'}
                {success && '✅ Mensagem Enviada!'}
                {!loading && !success && '📧 Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
