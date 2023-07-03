import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { Resume } from './components/Resume/Resume'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
