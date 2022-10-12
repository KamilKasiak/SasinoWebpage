import './Layout.scss';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import outsideLanding from '../assets/outsideLanding.png';

const Layout = () => {
  return (
    <div className='App'>
      <div className='fixed-image'>
        <img
          className='outsideLanding'
          src={outsideLanding}
          alt='outside'
        ></img>
      </div>
      <Navbar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
