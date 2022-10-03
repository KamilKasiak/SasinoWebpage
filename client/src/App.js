import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Reservation from './components/Reservation';
import Photos from './components/Photos.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Reservation />} />
        <Route path='/photos' element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default App;
