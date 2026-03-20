import { useEffect, useRef, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Stats from './components/Stats';
import FloatingButtons from './components/FloatingButtons';

// Lazy load components that are below the fold
const Diferenciais = lazy(() => import('./components/Diferenciais'));
const Depoimentos = lazy(() => import('./components/Depoimentos'));
const Contato = lazy(() => import('./components/Contato'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <Diferenciais />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <Depoimentos />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <Contato />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <Footer />
      </Suspense>
      <FloatingButtons />
    </>
  );
}

export default App;
