import { useEffect, useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [stats, setStats] = useState([
    { icon: '📅', value: 0, target: 21, suffix: '+', label: 'Anos de Mercado' },
    { icon: '🚗', value: 0, target: 5000, suffix: '+', label: 'Veículos Atendidos' },
    { icon: '😊', value: 0, target: 98, suffix: '%', label: 'Clientes Satisfeitos' },
    { icon: '🔧', value: 0, target: 15000, suffix: '+', label: 'Serviços Realizados' },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        stats.forEach((stat, idx) => {
          animateCounter(idx, stat.target);
        });
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateCounter = (idx, target) => {
    const duration = 2000;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setStats(prev => {
        const newStats = [...prev];
        newStats[idx] = { ...newStats[idx], value: Math.floor(current) };
        return newStats;
      });
    }, 1000 / fps);
  };

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item" data-animate="fade-up">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                <span className="stat-number">{stat.value.toLocaleString('pt-BR')}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
