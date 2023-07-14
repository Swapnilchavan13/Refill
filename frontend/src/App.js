import './App.css';
import { Provider } from 'react-redux';
import { Buy } from './Components/Buy';
import { Navbar } from './Components/Navbar';
import { Login } from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from './Components/Register';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
