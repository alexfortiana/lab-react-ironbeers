
import './App.css';

import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">


 
    <div className='nav-bar'>
    <Link to="/"><img src="/Home.png" alt="" width={75} /> </Link>
  </div>
  

  

    

    <Routes>
 
    <Route path='/' element={<Home/>}/>
    <Route path='/beers' element={<BeerList/>}/>
    <Route path='/random-beer' element={<RandomBeer/>}/>
    <Route path='/new-beer' element={<NewBeer/>}/>
    <Route path='/beers/:id' element={<SingleBeer/>}/>


    </Routes>
       


   
    </div>
  );
}

export default App;
