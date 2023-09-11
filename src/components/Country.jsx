import { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountry}) => {
   const {name, flags,cca3} = country;

   const [visited, setVisited] = useState(false);

   const handleVisited = () =>{
        setVisited(!visited);
   }
   
 
  
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited ? 'red': 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Area: {country.area}</h4>
            <h5>Population: {country.population}</h5>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country': 'I want to visit'}

        </div>
    );
};

export default Country;