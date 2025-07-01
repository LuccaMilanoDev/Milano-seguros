'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/segure-as-chaves-a-mao-ao-ar-livre.jpg")',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Protegendo o que mais{' '}
            <span className="text-green-400">importa</span>{' '}
            para você
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Com experiência, confiança e inovação em seguros
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[250px] sm:min-w-0"
            >
              Conheça nossos serviços
            </Link>
            
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-[250px] sm:min-w-0"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <Link href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Link>
    </section>
  );
};

export default Hero; 