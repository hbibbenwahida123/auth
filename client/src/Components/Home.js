import React from 'react';
import './Common.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* HERO SECTION */}
        <div className="home-header">
          <h1 className="home-title">Bienvenue en Tunisie</h1>
          <p className="home-subtitle">Explorez les meilleures destinations de voyage avec nos bons plans exclusifs !</p>
          <p className="home-description">
            Découvrez la beauté de la Tunisie à travers ses plages paradisiaques, 
            ses déserts majestueux et son riche patrimoine culturel.
          </p>
          <div className="home-actions">
            <button className="home-btn home-btn-primary">
              <i className="fas fa-compass"></i>
              Explorer
            </button>
            <button className="home-btn home-btn-secondary">
              <i className="fas fa-envelope"></i>
              Contactez-nous
            </button>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="home-carousel">
          <div className="carousel-container">
            <div className="carousel-slide active">
              <img 
                src="https://kawa-news.com/wp-content/uploads/2024/12/shutterstock_1338384470-1-1024x683.jpg" 
                alt="Plage" 
                className="carousel-image"
              />
              <div className="carousel-caption">
                <h3>Les plus belles plages</h3>
                <p>Découvrez les plages de sable fin et les eaux cristallines</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img 
                src="https://www.dunes-insolites.com/wp-content/uploads/2024/06/desert-tunisie-sahara-tembain.jpg" 
                alt="Désert" 
                className="carousel-image"
              />
              <div className="carousel-caption">
                <h3>Les dunes du Sahara</h3>
                <p>Explorez les vastes étendues du désert tunisien</p>
              </div>
            </div>
            <div className="carousel-slide">
              <img 
                src="https://www.marhba.com/images/culture/culture2018/coverunescotunisia.jpg" 
                alt="Culture" 
                className="carousel-image"
              />
              <div className="carousel-caption">
                <h3>Un riche patrimoine</h3>
                <p>Plongez dans l'histoire et la culture tunisienne</p>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-btn next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="home-description-section">
          <h2 className="home-section-title">À propos de notre site</h2>
          <p className="home-section-text">
            Notre plateforme vous guide à travers les destinations incontournables de la Tunisie. 
            Que vous cherchiez des plages, des montagnes, des sites historiques ou des festivals, 
            vous trouverez ici les bons plans pour un voyage inoubliable.
          </p>
        </div>

        {/* DESTINATIONS SECTION */}
        <div className="home-features">
          {[
            {
              title: 'Sidi Bou Saïd',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8WVxV6y3UVIZvTLHtJDJI6u7fvySGX13Zg&s',
              desc: 'Un village pittoresque aux maisons blanches et bleues, perché sur une falaise avec une vue imprenable sur la Méditerranée.',
              icon: '🏘️'
            },
            {
              title: 'Tozeur',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnJxqV8VmwSrE4McdV_tBRqe8pbdzKfLy8A&s',
              desc: 'La porte du désert et ses oasis verdoyantes, un contraste saisissant entre le sable et la végétation.',
              icon: '🏜️'
            },
            {
              title: 'Hammamet',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzJP5sYf7v9J259M4hzGFHHXvSuUfVNWZkg&s',
              desc: 'Une station balnéaire idéale pour se détendre, avec ses plages de sable fin et ses eaux turquoise.',
              icon: '🏖️'
            }
          ].map((place, index) => (
            <div key={index} className="home-feature">
              <div className="home-feature-content">
                <div className="home-feature-icon">{place.icon}</div>
                <img 
                  src={place.img} 
                  alt={place.title} 
                  className="home-feature-image"
                />
                <h3 className="home-feature-title">{place.title}</h3>
                <p className="home-feature-description">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="home-footer">
          <p>© 2025 Bon Plans Tunisie. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
