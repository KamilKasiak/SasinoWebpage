import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Reservation from './components/Reservation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Reservation />} />
      </Route>
    </Routes>
  );
}

export default App;
