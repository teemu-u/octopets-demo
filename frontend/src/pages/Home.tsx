import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LISTING_TYPES, ROUTES } from '../data/constants';
import { PET_TYPES } from '../data/constantsJsx';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [randomPetImage, setRandomPetImage] = useState<string>('/images/generic/doggo.jpg');
  useEffect(() => {
    // List of pet images available in the public/images/pets directory
    const petImages = [
      'bunny.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'dog-9.jpg',
      'dog1.png', 'dog3.jpg', 'dog4.png', 'dog5.jpg',
      'dog6.png', 'dog7.jpg', 'dog8.jpg', 'dog10.jpg', 'hedgehog.jpg'
    ];

    // Create a more robust random selection using a combination of current time
    // and crypto random values (if available)
    let randomIndex;
    if (window.crypto && window.crypto.getRandomValues) {
      // Use cryptographically strong random number generator when available
      const randomBuffer = new Uint32Array(1);
      window.crypto.getRandomValues(randomBuffer);
      randomIndex = randomBuffer[0] % petImages.length;
    } else {
      // Fallback to Math.random() with time-based seed influence
      const timeInfluence = Date.now() % petImages.length;
      randomIndex = Math.floor(Math.random() * petImages.length);
      // Combine the two sources of randomness
      randomIndex = (randomIndex + timeInfluence) % petImages.length;
    }

    // Select a random image from the array using the generated index
    const randomImage = petImages[randomIndex];
    setRandomPetImage(`/images/pets/${randomImage}`);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Find purrfect<br />pet-friendly places</h1>
          <p>Discover and share amazing spots for your furry, feathery, or scaly friends.</p>
          <div className="hero-buttons">
            <Link to={ROUTES.LISTINGS} className="btn btn-outline">Browse listings</Link>
          </div>
        </div>
        <div className="floating-pet-icons-container">
          <div className="floating-pet-icon" style={{ top: '15%', left: '10%', '--scale': '1.35', '--start-opacity': '1', '--mid-opacity': '0.3', animationDelay: '0s', animationDuration: '18s' } as React.CSSProperties}>🐶</div>
          <div className="floating-pet-icon" style={{ top: '65%', left: '15%', '--scale': '0.9', '--start-opacity': '0.4', '--mid-opacity': '1', animationDelay: '-3s', animationDuration: '22s' } as React.CSSProperties}>🐱</div>
          <div className="floating-pet-icon" style={{ top: '30%', left: '85%', '--scale': '1.5', '--start-opacity': '0.7', '--mid-opacity': '0.2', animationDelay: '-7s', animationDuration: '25s' } as React.CSSProperties}>🐰</div>
          <div className="floating-pet-icon" style={{ top: '70%', left: '80%', '--scale': '0.75', '--start-opacity': '0.3', '--mid-opacity': '0.9', animationDelay: '-12s', animationDuration: '20s' } as React.CSSProperties}>🐢</div>
          <div className="floating-pet-icon" style={{ top: '20%', left: '45%', '--scale': '0.6', '--start-opacity': '0.2', '--mid-opacity': '1', animationDelay: '-15s', animationDuration: '23s' } as React.CSSProperties}>🐦</div>
          <div className="floating-pet-icon" style={{ top: '75%', left: '50%', '--scale': '1.25', '--start-opacity': '0.9', '--mid-opacity': '0.4', animationDelay: '-8s', animationDuration: '19s' } as React.CSSProperties}>🦊</div>
          <div className="floating-pet-icon" style={{ top: '40%', left: '20%', '--scale': '0.85', '--start-opacity': '0.5', '--mid-opacity': '1', animationDelay: '-14s', animationDuration: '21s' } as React.CSSProperties}>🐹</div>
          <div className="floating-pet-icon" style={{ top: '55%', left: '30%', '--scale': '1.15', '--start-opacity': '0.8', '--mid-opacity': '0.3', animationDelay: '-6s', animationDuration: '24s' } as React.CSSProperties}>🦜</div>
          <div className="floating-pet-icon" style={{ top: '25%', left: '70%', '--scale': '0.95', '--start-opacity': '0.3', '--mid-opacity': '0.8', animationDelay: '-11s', animationDuration: '17s' } as React.CSSProperties}>🦔</div>

          {/* Additional icons that always start faded out and then appear */}
          <div className="floating-pet-icon" style={{ top: '62%', left: '75%', '--scale': '1.4', '--start-opacity': '0', '--mid-opacity': '0.9', animationDelay: '-5s', animationDuration: '26s' } as React.CSSProperties}>🐠</div>
          <div className="floating-pet-icon" style={{ top: '33%', left: '22%', '--scale': '1.6', '--start-opacity': '0', '--mid-opacity': '0.85', animationDelay: '-9s', animationDuration: '24s' } as React.CSSProperties}>🦁</div>
          <div className="floating-pet-icon" style={{ top: '18%', left: '65%', '--scale': '0.7', '--start-opacity': '0', '--mid-opacity': '0.7', animationDelay: '-13s', animationDuration: '22s' } as React.CSSProperties}>🦎</div>
        </div>
        <div className="hero-decoration">
          <div className="hero-circle hero-circle-yellow"></div>
        </div>
      </section>

      <section className="content">
        <section className="pet-types">
          <div className="section-header">
            <h2>Find places for your pets</h2>
            <p>We make finding pet-friendly places easy and fun</p>
          </div>
          <div className="pet-types-grid">
            {PET_TYPES.map(pet => (
              <Link
                to={`${ROUTES.LISTINGS}?petType=${pet.id}`}
                key={pet.id}
                className="pet-type-card"
              >
                <div className="pet-circle">
                  <span className="pet-icon">{pet.icon}</span>
                </div>
                <h3>{pet.name}</h3>
              </Link>
            ))}
          </div>
        </section>        <section className="why-section">
          {/* Floating polaroid photos container */}
          <div className="floating-polaroids-container">
            {/* Polaroids arranged in a circular fashion around the "Why choose Octopets" section */}
            {/* 12 o'clock position - Top center */}
            <div className="polaroid polaroid-1" style={{ top: '-18%', left: '50%', transform: 'translate(-50%, 0) rotate(-5deg)', animationDelay: '-15s', '--rotate': '-5deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/bunny.jpg`} alt="Bunny" />
              <p>Hoppy times!</p>
            </div>
            {/* 2 o'clock position - Top right */}
            <div className="polaroid polaroid-2" style={{ top: '-12%', right: '18%', transform: 'translate3d(0, 0, 0) rotate(7deg)', animationDelay: '-29s', '--rotate': '7deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog7.jpg`} alt="Dog" />
              <p>Paws & relax</p>
            </div>
            {/* 3 o'clock position - Right middle */}
            <div className="polaroid polaroid-4" style={{ top: '42%', right: '10%', transform: 'translate3d(0, 0, 0) rotate(4deg)', animationDelay: '-33s', '--rotate': '4deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/cat1.jpg`} alt="Cat" />
              <p>Meow moments</p>
            </div>
            {/* 5 o'clock position - Bottom right */}
            <div className="polaroid polaroid-5" style={{ bottom: '-12%', right: '18%', transform: 'translate3d(0, 0, 0) rotate(-8deg)', animationDelay: '-21s', '--rotate': '-8deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/hedgehog.jpg`} alt="Hedgehog" />
              <p>Tiny explorer</p>
            </div>

            {/* 6 o'clock position - Bottom center */}
            <div className="polaroid polaroid-1" style={{ bottom: '-20%', left: '50%', transform: 'translate(-50%, 0) rotate(6deg)', animationDelay: '-37s', '--rotate': '6deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog5.jpg`} alt="Dog" />
              <p>Sunny strolls</p>
            </div>
            {/* 7 o'clock position - Bottom left */}
            <div className="polaroid polaroid-2" style={{ bottom: '-12%', left: '18%', transform: 'translate3d(0, 0, 0) rotate(-4deg)', animationDelay: '-25s', '--rotate': '-4deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog3.jpg`} alt="Dog" />
              <p>Buddies 4ever</p>
            </div>
            {/* 9 o'clock position - Left middle */}
            <div className="polaroid polaroid-3" style={{ top: '42%', left: '10%', transform: 'translate3d(0, 0, 0) rotate(9deg)', animationDelay: '-51s', '--rotate': '9deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog10.jpg`} alt="Dog" />
              <p>Sleepy time!</p>
            </div>
            {/* 10 o'clock position - Top left */}
            <div className="polaroid polaroid-4" style={{ top: '-12%', left: '18%', transform: 'translate3d(0, 0, 0) rotate(-7deg)', animationDelay: '-19s', '--rotate': '-7deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog6.png`} alt="Dog" />
              <p>Happy puppy day!</p>
            </div>
            {/* Inner circle - 11 o'clock position */}
            <div className="polaroid polaroid-5" style={{ top: '-8%', left: '28%', transform: 'translate3d(0, 0, 0) rotate(5deg)', animationDelay: '-39s', '--rotate': '5deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/cat2.jpg`} alt="Cat" />
              <p>Window watcher</p>
            </div>
            {/* Inner circle - 1 o'clock position */}
            <div className="polaroid polaroid-1" style={{ top: '-8%', right: '28%', transform: 'translate3d(0, 0, 0) rotate(-3deg)', animationDelay: '-47s', '--rotate': '-3deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/cat3.jpg`} alt="Cat" />
              <p>Curious kitty</p>
            </div>
            {/* Inner circle - 2 o'clock position */}
            <div className="polaroid polaroid-2" style={{ top: '5%', right: '22%', transform: 'translate3d(0, 0, 0) rotate(2deg)', animationDelay: '-31s', '--rotate': '2deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog8.jpg`} alt="Dog" />
              <p>Backyard hangout!</p>
            </div>
            {/* Inner circle - 4 o'clock position */}
            <div className="polaroid polaroid-3" style={{ top: '62%', right: '22%', transform: 'translate3d(0, 0, 0) rotate(-2deg)', animationDelay: '-27s', '--rotate': '-2deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog4.png`} alt="Dog" />
              <p>Park adventures</p>
            </div>
            {/* Inner circle - 5 o'clock position */}
            <div className="polaroid polaroid-4" style={{ bottom: '-8%', right: '28%', transform: 'translate3d(0, 0, 0) rotate(3deg)', animationDelay: '-23s', '--rotate': '3deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog-9.jpg`} alt="Dog" />
              <p>Fall in Seattle</p>
            </div>
            {/* Inner circle - 7 o'clock position */}
            <div className="polaroid polaroid-5" style={{ bottom: '-8%', left: '28%', transform: 'translate3d(0, 0, 0) rotate(-5deg)', animationDelay: '-18s', '--rotate': '-5deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog11.png`} alt="Dog" />
              <p>Cozy companion</p>
            </div>
            {/* Inner circle - 8 o'clock position */}
            <div className="polaroid polaroid-1" style={{ top: '62%', left: '22%', transform: 'translate3d(0, 0, 0) rotate(4deg)', animationDelay: '-42s', '--rotate': '4deg' } as React.CSSProperties}>
              <img src={`${process.env.PUBLIC_URL}/images/pets/dog12.jpg`} alt="Dog" />
              <p>Park explorer</p>
            </div>
          </div>

          <div className="section-header">
            <h2>Why choose Octopets?</h2>
            <p>We make finding pet-friendly places easy and fun</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">🔎</span>
                <h3>Discover</h3>
              </div>
              <p>Find vetted pet-friendly venues recommended by other pet owners</p>
            </div>
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">🤝</span>
                <h3>Connect</h3>
              </div>
              <p>Share experiences and tips with a community of pet lovers</p>
            </div>
            <div className="feature-card">
              <div className="feature-title">
                <span className="feature-icon">⭐</span>
                <h3>Rate & Review</h3>
              </div>
              <p>Help others by rating and reviewing pet-friendly places</p>
            </div>          
            </div>
        </section>        
        
        <section className="venue-types">

          <div className="section-header">
            <h2>Explore venue types</h2>
            <p>Discover a variety of pet-friendly establishments for every occasion</p>
          </div>

          <div className="venue-types-grid">
            {LISTING_TYPES.map(type => (
              <div className="venue-card" key={type.id}>
                <div className="venue-media">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/venues/_${type.id}.jpg`}
                    alt={type.name}
                    className="venue-image"
                  />
                </div>
                <div className="venue-info">
                  <h3>{type.name}</h3>
                  <Link to={`${ROUTES.LISTINGS}?listingType=${type.id}`} className="btn btn-small btn-outline">
                    Find venues
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>        <section className="cta-section-container">
          <section className="cta-section">
            <div className="cta-image">
              <img src={`${process.env.PUBLIC_URL}${randomPetImage}`} alt="Pet enjoying a pet-friendly place" />
            </div>
            <div className="cta-content">
              <div className="cta-text">
                <h2>Have a pet-friendly place to share?</h2>
                <p>Help other pet owners discover great places for their furry, feathery, or scaly friends.</p>
              </div>
            </div>          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;