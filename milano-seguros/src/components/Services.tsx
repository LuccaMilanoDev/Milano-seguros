'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Services = () => {
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

  const servicesData = [
    {
      title: "Seguro Auto",
      benefits: [
        "Cobertura completa para colisões",
        "Assistência 24h em todo território nacional",
        "Proteção contra roubo e furto",
        "Carro reserva disponível"
      ]
    },
    {
      title: "Seguro Residencial",
      benefits: [
        "Proteção contra incêndio e explosão",
        "Cobertura para danos elétricos",
        "Responsabilidade civil familiar",
        "Assistência domiciliar emergencial"
      ]
    },
    {
      title: "Seguro Vida",
      benefits: [
        "Indenização por morte natural ou acidental",
        "Cobertura para invalidez permanente",
        "Assistência funeral inclusa",
        "Opções de resgate e empréstimo"
      ]
    },
    {
      title: "Seguro Empresarial",
      benefits: [
        "Proteção do patrimônio empresarial",
        "Cobertura para equipamentos",
        "Responsabilidade civil geral",
        "Interrupção de atividades"
      ]
    },
    {
      title: "Seguro Viagem",
      benefits: [
        "Assistência médica internacional",
        "Cobertura para bagagem extraviada",
        "Cancelamento de viagem",
        "Suporte 24h no exterior"
      ]
    },
    {
      title: "Seguro Saúde",
      benefits: [
        "Rede credenciada ampla",
        "Atendimento ambulatorial e hospitalar",
        "Cobertura para exames e consultas",
        "Medicina preventiva inclusa"
      ]
    }
  ];

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Nossos <span className="text-[#344e0d]">Serviços</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de seguros personalizados para proteger o que mais importa 
            para você, com a qualidade e confiança que só a Milano Seguros pode oferecer.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Título do Serviço */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                {service.title}
              </h3>
              
              {/* Lista de Benefícios */}
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#344e0d] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Botão de Cotação */}
              <div className="text-center">
                <Link 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#344e0d] hover:bg-[#2a3d0a] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full"
                >
                  Solicitar Cotação
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div 
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Não encontrou o que procurava? Temos soluções personalizadas para suas necessidades.
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#344e0d] border-2 border-[#344e0d] hover:bg-[#344e0d] hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Fale com um Especialista
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 