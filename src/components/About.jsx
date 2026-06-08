import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-number">03</div>
        <h2 className="section-title">PRECISION & EXPERTISE</h2>
        <p className="about-description">
          We deliver uncompromising quality through meticulous attention to detail and advanced installation techniques.
        </p>
        
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Quality Guarantee</div>
          </div>
        </div>

        <p className="certifications">
          3M Preferred Installer • XPEL Certified • Fully Insured
        </p>
      </div>
    </section>
  );
};

export default About;
