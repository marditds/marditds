import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Home } from './components/Home'

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
