import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NuevaBusqueda = ( {setPokemon} ) => {
  
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    setInputValue( e.target.vale )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 1 ){
      setPokemon( poke => [ inputValue, ...poke ] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

export default NuevaBusqueda;

NuevaBusqueda.propTypes = {
  setPokemon: PropTypes.func.isRequired
}