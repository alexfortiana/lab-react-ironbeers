import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>



    <h1>Home</h1>

    <Link to="/beers">
    <div>
    <img src="/beers.png" alt="beers" />
    <h2>All Beers</h2>
    <p>Here you will find all the beers that we have!</p>
    </div>




    </Link>
    <Link to="/random-beer">
    <div>
    <img src="/random-beer.png" alt="beers" />
    <h2>Random Beer</h2>
    <p>Here we can take a random beer! try it!</p>
    </div>
    
    
    </Link>
    <Link to="/new-beer">
    <div>
    <img src="/new-beer.png" alt="beers" />
    <h2>New Beer</h2>
    <p>Here you can add your own beer!</p>
    </div>
    </Link>
    
    
    
    
    </div>
  )
}

export default Home