import React, { useState } from 'react';
import './App.css';
import InfoPoke from './components/InfoPoke';

function App() {

  const [ pokemon, setPokemon ] = useState(['Pikachu']);

  return (
    <div className="container">
      <h2>Pokemon Shearch</h2>
      <hr/>
      <ol>
        {
          pokemon.map((category, i) => {
            <InfoPoke
              key={ category }
              category={ category }
            />
          })
        }
      </ol>
    </div>
  );
}

export default App;
