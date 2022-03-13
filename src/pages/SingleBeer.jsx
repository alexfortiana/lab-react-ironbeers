import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function SingleBeer() {
    
    const [singleBeer, setSingleBeer] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        getOneBeer()

    }, [])

    const getOneBeer = async() => {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        console.log(response.data)
        setSingleBeer(response.data)
    }

    if(!singleBeer) {
        return <div>...loading</div>
    }

  return (
    <div key={singleBeer._id}>

    <img src={singleBeer.image_url} alt="beer_image" width={100} />
    <h1>{singleBeer.name}</h1>
    <p>{singleBeer.tagline}</p>
    <p>{singleBeer.first_brewed}</p>
    <p>{singleBeer.attenuation_level}</p>
    <p>{singleBeer.description}</p>
    <p>{singleBeer.contributed_by}</p>

    </div>
  )
}

export default SingleBeer