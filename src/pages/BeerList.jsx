import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function BeerList() {
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    setAllBeers(response.data);
  };

  if (!allBeers) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1>LISTA DE CERVEZAS</h1>

      <SearchBar/>

      

  
      {allBeers.map((eachBeer) => {
        return (
          <Link to={`/beers/${eachBeer._id}`}>
            <div key={eachBeer._id}>
              <h4>{eachBeer.name}</h4>
              <img src={eachBeer.image_url} alt="beerphoto" width={50} />
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default BeerList;
