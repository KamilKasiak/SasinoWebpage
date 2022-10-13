import * as React from 'react';
import { useState } from 'react';
import 'animate.css';
import './Photos.scss';
import salon from '../assets/carouselCaller/insideSalon.jpg';
import sauna from '../assets/carouselCaller/outsideSauna.jpg';
import beach from '../assets/carouselCaller/beachSmall.jpg';
import InsideCarousel from './carousels/InsideCarousel';
import OutsideCarousel from './carousels/OutsideCarousel';
import NearbyCarousel from './carousels/NearbyCarousel';

const Photos = () => {
  const [carousel1, setCarousel1] = useState(false);
  const [carousel2, setCarousel2] = useState(false);
  const [carousel3, setCarousel3] = useState(false);

  React.useEffect(() => {
    document.addEventListener('click', function (e) {
      if (
        document.getElementById('insideCarousel').contains(e.target) ||
        document.getElementById('inside').contains(e.target)
      ) {
        setCarousel1(true);
      } else {
        setCarousel1(false);
      }
      if (
        document.getElementById('outsideCarousel').contains(e.target) ||
        document.getElementById('outside').contains(e.target)
      ) {
        setCarousel2(true);
      } else {
        setCarousel2(false);
      }
      if (
        document.getElementById('nearbyCarousel').contains(e.target) ||
        document.getElementById('nearby').contains(e.target)
      ) {
        setCarousel3(true);
      } else {
        setCarousel3(false);
      }
    });
  });

  return (
    <div className='photo-section'>
      <div className='photos-description'>
        <h2>House tailored for you</h2>
        <h3>It's time to heal your mind and body</h3>
      </div>
      <div className='photos' id='photos'>
        <div
          id='inside'
          className='inside'
          onClick={() => {
            setCarousel1(true);
          }}
        >
          <h3>What is inside?</h3>
          <div className='photos-image'>
            <img src={salon} alt='salon' />
          </div>
          {/* <div
            id='insideCarousel'
           className={
              carousel1
                ? 'animate__animated animate__fadeInLeft insideCarousel'
                : 'hide'
            }
          >
            {carousel1 ? <InsideCarousel /> : null}
          </div>  */}
        </div>
        <div
          id='outside'
          className='outside'
          alt='outside'
          onClick={() => {
            setCarousel2(true);
          }}
        >
          <h3>What is outside?</h3>
          <div className='photos-image'>
            <img src={sauna} alt='sauna' />
          </div>
        </div>
        <div
          id='nearby'
          className='nearby'
          alt='nearby'
          onClick={() => {
            setCarousel3(true);
          }}
        >
          <h3>What is nearby?</h3>
          <div className='photos-image'>
            <img src={beach} alt='beach' />
          </div>
        </div>
        <div
          id='insideCarousel'
          className={
            carousel1
              ? 'animate__animated animate__fadeInLeft insideCarousel small1'
              : 'hide'
          }
        >
          {carousel1 ? <InsideCarousel /> : null}
        </div>
        <div
          id='outsideCarousel'
          className={
            carousel2
              ? 'animate__animated animate__fadeInUp insideCarousel small2'
              : 'hide'
          }
        >
          {carousel2 ? <OutsideCarousel /> : null}
        </div>
        <div
          id='nearbyCarousel'
          className={
            carousel3
              ? 'animate__animated animate__fadeInRight insideCarousel small3'
              : 'hide'
          }
        >
          {carousel3 ? <NearbyCarousel /> : null}
        </div>
      </div>
    </div>
  );
};

export default Photos;
