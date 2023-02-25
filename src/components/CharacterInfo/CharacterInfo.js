import './CharacterInfo.css';
import React from 'react';

const CharacterInfo = ({character,handleClick})=>{
    return(
        <div key={character._id} className='character' onClick = {handleClick}>
        {character.imageUrl ? <img className='character__img' src={character.imageUrl} alt='' /> : <p>No hay imagen</p>}
        {character.name ? <p>{character.name}</p> : <p>No hay nombre</p>}
    </div>
    )
}

export default CharacterInfo;