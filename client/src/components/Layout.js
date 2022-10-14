import './Layout.scss';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import outsideLanding from '../assets/outside/outsideLanding.png';
import Photos from './Photos.js';
import ContactUs from './ContactUs';

const Layout = () => {
  return (
    <div className='App'>
      <div className='page'>
        <Navbar />
        <div id='home' className='for-title'>
          <Outlet />
        </div>

        <div className='backgroundImage'>
          <img
            className='outsideLanding'
            src={outsideLanding}
            alt='outside'
          ></img>
        </div>
        <div id='photos' className='library'>
          {<Photos />}
          <div id='contact-us' className='contact-us'>
            {<ContactUs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
