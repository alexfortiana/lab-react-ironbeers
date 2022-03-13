import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function SearchBar() {
    const [searcing, setSearching] = useState(null)

    useEffect(()=> {

    }, [])

    const getSearch = async (event) => {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q={query}")

        setSearching(response.data)

    }

    const handleSearching = (event) => {


    }




  return (
    <div>

      <label htmlFor="search">Search your beer:</label>
      <input type="text" name="search" value={searcing} onChange={handleSearching}/>

    
    
    
    
    
    
    
    
    </div>
  )
}

export default SearchBar