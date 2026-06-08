import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (heroRef.current && scrolled < 800) {
        heroRef.current.style.opacity = 1 - (scrolled / 800);
      }

      if (heroImageRef.current && scrolled < window.innerHeight) {
        heroImageRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div 
        className="hero-image" 
        ref={heroImageRef}
        style={{ 
          background: 'url(/v712vjl4mvs61.jpg) center center no-repeat',
          backgroundSize: '100%'
        }}
      ></div>
      <div className="hero-content" ref={heroRef}>
        <h1 className="hero-title">CRAFTED TO PERFECTION</h1>
        <p className="hero-subtitle">Premium automotive styling and protection</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={handleBookClick}>
            Book Consultation
          </a>
        </div>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;
