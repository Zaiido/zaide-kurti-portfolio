import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
