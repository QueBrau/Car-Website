import { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const servicesRef = useRef([]);

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

    servicesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      servicesRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      number: '01',
      title: 'FULL WRAPS',
      description: 'Complete vehicle transformation with premium vinyl wraps. Matte, gloss, chrome, or custom designs.'
    },
    {
      number: '02',
      title: 'WINDOW TINTING',
      description: 'Professional ceramic and carbon tinting for style, privacy, and UV protection.'
    },
    {
      number: '03',
      title: 'PARTIAL WRAPS',
      description: 'Strategic accents. Roofs, hoods, mirrors, and custom details.'
    },
    {
      number: '04',
      title: 'PAINT PROTECTION',
      description: 'Invisible protection against chips, scratches, and environmental damage.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SERVICES</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              ref={(el) => (servicesRef.current[index] = el)}
            >
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-link">Schedule Appointment →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
