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

/*Este componente representa una tarjeta de cada uno de los personajes que recibimos de la llamada
y que se muestran como un listado tarjetas de cada página que vamos llamando en el componente
CharacterList.

Se le aplican condicionales para que muestre un mensaje en caso de que no se cargue bien algún dato.*/