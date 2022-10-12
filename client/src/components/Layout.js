import './Layout.scss';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import outsideLanding from '../assets/outsideLanding.png';
import Photos from './Photos.js';

const Layout = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='for-title'>
        <Outlet />
      </div>

      <div className='page'>
        <img
          className='outsideLanding'
          src={outsideLanding}
          alt='outside'
        ></img>
        <div className='library'>{<Photos />}</div>
      </div>
    </div>
  );
};

export default Layout;
