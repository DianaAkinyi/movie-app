
import './App.css';
import GetMovies from './component';
import Navbar from './Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import MovieDetails from './component/Details/MovieDetails';




function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
      <GetMovies/>
      <Routes>
         <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
