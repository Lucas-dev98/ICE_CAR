import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Stats from './components/Stats';
import Diferenciais from './components/Diferenciais';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './App.css';

function App() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current?.classList.add('scrolled');
      } else {
        headerRef.current?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observer para ativar animações ao scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todos os elementos com data-animate
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Stats />
        <Diferenciais />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
