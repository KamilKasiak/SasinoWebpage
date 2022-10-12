import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Title from './components/Title';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Title />} />{' '}
      </Route>
    </Routes>
  );
}

export default App;
