import './Navbar.scss';
// import logo from '../assets/home-logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-nav'>
        {/* <div className='logo'>
          <img src={logo} alt='Dom Pod Dębami' />
          <h1>Dom Pod Dębami</h1>
        </div> */}
      </div>
      <div className='mid-nav'>
        <div className='links'>
          <a href='#nerby'>Home</a>
          <a href='https://google.com'>About Us</a>
          <a href='https://google.com'>Contact Us</a>
        </div>
        <svg
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
