import { useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive((prev) => !prev);
    if (isActive) {
      gsap.to('.links', { x: '100%' });
      gsap.to('.line', { stroke: 'forestgreen' });
      gsap.set('.App', { overflowY: 'auto' });
    } else {
      gsap.to('.links', { x: '0%' });
      gsap.to('.line', { stroke: 'black' });
      gsap.fromTo(
        '.links a',
        { opacity: 0, y: 0 },
        { opacity: 1, y: 20, delay: 0.25, stagger: 0.2 }
      );
      gsap.set('.App', { overflowY: 'hidden' });
    }
  };
  const handleLinkClick = () => {
    setIsActive((prev) => !prev);
    gsap.to('.links', { x: '100%' });
    gsap.set('.App', { overflowY: 'auto' });
  };

  return (
    <div className='navbar'>
      <div className='links'>
        <a href='#home' onClick={() => handleLinkClick()}>
          Home
        </a>
        <a href='#photos' onClick={() => handleLinkClick()}>
          About Us
        </a>
        <a href='#contact-us' onClick={() => handleLinkClick()}>
          Contact Us
        </a>
      </div>
      <div className='burger'>
        <svg
          onClick={() => {
            handleBurgerClick();
          }}
          width='44'
          height='18'
          viewBox='0 0 44 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            className='line'
            y1='1'
            x2='44'
            y2='1'
            stroke='white'
            strokeWidth='2'
          />
          <line
            className='line'
            y1='9'
            x2='27'
            y2='9'
            stroke='white'
            strokeWidth='2'
          />
          <line
            className='line'
            y1='17'
            x2='11'
            y2='17'
            stroke='white'
            strokeWidth='2'
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
