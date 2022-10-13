import './Layout.scss';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import outsideLanding from '../assets/outside/outsideLanding.png';
import Photos from './Photos.js';

const Layout = () => {
  return (
    <div className='App'>
      <div className='page'>
        <Navbar />
        <div className='for-title'>
          <Outlet />
        </div>

        <div className='backgroundImage'>
          <img
            className='outsideLanding'
            src={outsideLanding}
            alt='outside'
          ></img>
        </div>
        <div className='library'>{<Photos />}</div>
      </div>
    </div>
  );
};

export default Layout;
