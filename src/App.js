import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllBooks from './Components/AllBooks';
import AddBook from './Components/AddBook';
import UrlShort from './Components/UrlShort';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UrlShort/>}/>
            <Route path="/add" element={<AddBook/>}/>
            <Route path="/all" element={<AllBooks/>}/>
            
          
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
