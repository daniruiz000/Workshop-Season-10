import './CharacterInfo.css';
import React from 'react';

const CharacterInfo = ({ character, handleClick }) => {
    return (
        <div key={character._id} className='character-info' onClick={handleClick}>
            {character.imageUrl ? <img className='character-info__img' src={character.imageUrl} alt='' /> : <p>No hay imagen</p>}
            {character.name ? <p className='character-info__text'>{character.name}</p> : <p>No hay nombre</p>}
        </div>
    )
}

export default CharacterInfo;