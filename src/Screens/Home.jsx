import React, { useEffect, useState, useRef } from 'react';
import homepagebg from '../assests/homepagebg.png';
import welcomeImage from '../assests/welcomeImage.jpeg';
import cat from '../assests/cat.jpeg'
import dog3welcome from '../assests/dog3welcome.jpeg'
import styled, { keyframes } from 'styled-components';

const Images = styled.img`
  width: 100vw;
  height: 550px;
  object-fit: cover; 
  z-index: -1;
  position: absolute;
  top: 80px;
  left: 10px;
  opacity: 0.85;
`;

const Upper = styled.div`
  z-index: 10;
  position: relative; 
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  gap: 20px;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2c327;
  width: 1150px;
  border-radius: 50px;
  font-size: 25px;
  margin-left: 250px;
  margin-top: 180px;
  gap: 10px;
  box-shadow: 15px 15px 10px lightgray;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
    animation: ${slideIn} 1s ease-out;
  }
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(welcomeRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Images src={homepagebg} alt="Homepage Background" />
      <Upper>
        <div style={{ fontSize: '6rem', fontFamily: 'Lobster' }}>Ready to </div>
        <div style={{ fontSize: '6rem', fontFamily: 'Lobster' }}>adopt a pet?</div>
        <div style={{ fontFamily: 'sans-serif', fontSize: '30px', fontWeight: '700', marginBottom: '40px' }}>
          Let's get started. Search pets from shelters, rescues, and individuals.
        </div>
      </Upper>
      <div style={{ backgroundColor: '#fbfbfa' }}>
        <Welcome
          ref={welcomeRef}
          className={isVisible ? 'visible' : ''}
        >
          <img src={welcomeImage} style={{ borderRadius: '50px' }} alt="Welcome" />
          Welcome to PawPatrol! We are passionate animal lovers committed to connecting homeless pets with loving families.
          Our mission is to make pet adoption a seamless, joyful, and fulfilling experience for both adopters and the pets who need them the most.
        </Welcome>

        <Welcome
          ref={welcomeRef}
          className={isVisible ? 'visible' : ''}
          style={{backgroundColor:'#4aa2f6',marginTop:'30px'}}
        >
           <img src={cat} style={{ borderRadius: '45px'}}/>
          <p>PawPatrol was born out of a desire to improve the pet adoption process. We noticed that countless animals in shelters were waiting for their forever homes, and many potential adopters found the process overwhelming or confusing. Our platform was created to bridge that gap, making it easier for pets and people to find each other</p>
        </Welcome>
        <Welcome
          ref={welcomeRef}
          className={isVisible ? 'visible' : ''}
          style={{backgroundColor:'#776f66',marginTop:'30px'}}
        >
        <img src={dog3welcome} style={{borderRadius:'50px'}}/>
        We collaborate with animal shelters, rescue organizations, and foster homes to provide a comprehensive database of adoptable pets. Our platform is designed to streamline the adoption process, offering detailed pet profiles, easy-to-navigate search features, and resources to guide you through every step of the adoption journey.
        </Welcome>
      </div>
    </div>
  );
}

export default Home;
