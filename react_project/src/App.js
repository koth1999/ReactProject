import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Portfolio from './Project/portfolio';
import Main from './Project/Main';
import Image from './Project/Image';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/image" element={<Image/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
