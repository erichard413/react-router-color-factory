import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ColorFactory from './ColorFactory';
import AppRoutes from './Routes';

function App() {
  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}

export default App;
