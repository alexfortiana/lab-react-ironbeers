import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'


function RandomBeer() {
    
    const [oneRandomBeer, setOneRandomBeer] = useState(null)

    useEffect(()=> {
        getRandomBeer()

    }, [])

    const getRandomBeer = async() => {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(response.data)
        setOneRandomBeer(response.data)
    }

    if(!oneRandomBeer) {
        return <div>...loading</div>
    }

  return (
    <div key={oneRandomBeer._id}>

    <img src={oneRandomBeer.image_url} alt="beer_image" width={100} />
    <h1>{oneRandomBeer.name}</h1>
    <p>{oneRandomBeer.tagline}</p>
    <p>{oneRandomBeer.first_brewed}</p>
    <p>{oneRandomBeer.attenuation_level}</p>
    <p>{oneRandomBeer.description}</p>
    <p>{oneRandomBeer.contributed_by}</p>

    </div>
  )
}

export default RandomBeer