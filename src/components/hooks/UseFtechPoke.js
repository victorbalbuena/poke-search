import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UseFtechPoke = ( category ) => {

  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  const loadData = () => {
    axios.get('https://pokeapi.co/v2/pokemon')
      .then(resp => {
        for(let i = 0; i < resp.data.results.length; i++ ){
          axios.get(rep.data.results[i].url)
            .then(result => {
              setPokemon(prevArray => [ ...prevArray. result.data ])
            });
        }
      });
  }

  useEffect(loadData, [])
  
  return (

    <div>
      
    </div>
  )
}

export default UseFtechPoke
