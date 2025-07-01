'use client';

import { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge de Credibilidade */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-[#344e0d] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              +20 Anos de Tradição
            </div>
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Sobre a <span className="text-[#344e0d]">Milano Seguros</span>
          </h2>

          {/* Conteúdo Principal */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Há mais de duas décadas, a Milano Seguros tem sido sinônimo de 
              <strong className="text-[#344e0d]"> confiança e excelência</strong> no 
              mercado de seguros. Nossa trajetória é construída sobre pilares sólidos 
              de integridade, inovação e comprometimento com nossos clientes.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Especialistas em proteger o que mais importa para você, oferecemos 
              soluções personalizadas que combinam <strong className="text-[#344e0d]">tradição</strong> com 
              as mais modernas práticas do setor, garantindo segurança e tranquilidade 
              para toda sua família.
            </p>
          </div>

          {/* Indicadores de Credibilidade */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#344e0d] mb-2">
                +20
              </div>
              <div className="text-gray-600 font-medium">
                Anos de Experiência
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#344e0d] mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">
                Comprometimento
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#344e0d] mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">
                Suporte Disponível
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 