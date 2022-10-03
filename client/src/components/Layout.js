import './Layout.scss';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import outsideLanding from '../assets/outsideLanding.png';

const Layout = () => {
  return (
    <div className='App'>
      <img className='outsideLanding' src={outsideLanding} alt='outside'></img>
      <Navbar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
