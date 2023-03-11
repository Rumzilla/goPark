import React from 'react';
import './style.css'

const AboutPage = () => {
  return (
    <div>
      <section className="head-section">
        <div className="container">
          <h2 className="about-us-text">
            ParkGO - единственная в Кыргызстане - платформа помогающая с организацией мероприятий, ивентов, марафонов, выставок, турниров и многое другое.
          </h2>
          <p className="about-us-description">
            За годы работы мы отточили подход к проектам, который помогает управлять рисками, не выходить за сроки и создавать цифровые решения для улучшения бизнеса наших клиентов.
          </p>
        </div>
      </section>
      <section className="main-section"></section>
    </div>
  );
};

export default AboutPage;