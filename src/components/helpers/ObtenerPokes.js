import axios from 'axios'

export const loadData = () => {
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