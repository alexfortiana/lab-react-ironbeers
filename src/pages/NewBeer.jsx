import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function NewBeer() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
       const newBeerToAdd = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
       await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerToAdd)
       navigate("/beers")

    }


    







  return (
    <div>
    
    <h1>Add your own beer</h1>

    <form onSubmit={handleSubmit} >

    
    <label htmlFor="name">Name:</label>
    <input 
    type="text" 
    name='name'
    value={name}
    onChange={(event)=> setName(event.target.value)} />
    <br />

    

    <label htmlFor="tagline">Tagline:</label>
    <input 
    type="text" 
    name='tagline'
    value={tagline}
    onChange={(event)=> setTagline(event.target.value)}  />
    <br />

    <label htmlFor="description">Description:</label>
    <input 
    type="text" 
    name='description' 
    value={description}
    onChange={(event)=> setDescription(event.target.value)}     
    />
    <br />

    <label htmlFor="first_brewed">First Brewed:</label>
    <input 
    type="text"
    name='first_brewed'
    value={first_brewed}
    onChange={(event)=> setFirst_brewed(event.target.value)}  />
    <br />

    <label htmlFor="brewers_tips">Brewers Tips:</label>
    <input 
    type="text" 
    name='brewers_tips'
    value={brewers_tips}
    onChange={(event)=> setBrewers_tips(event.target.value)}  />
    <br />

    <label htmlFor="attenuation_level">Attenuation Level:</label>
    <input 
    type="number" 
    name='attenuation_level'
    value={attenuation_level}
    onChange={(event)=> setAttenuation_level(event.target.value)}  

    />
    <br />

    <label htmlFor="contributed_by">Contributed By:</label>
    <input 
    type="text" 
    name='contributed_by'
    value={contributed_by}
    onChange={(event)=> setContributed_by(event.target.value)} 
     />
    <br />

    <button>Add Beer</button>







    </form>
    
    
    </div>
  )
}

export default NewBeer