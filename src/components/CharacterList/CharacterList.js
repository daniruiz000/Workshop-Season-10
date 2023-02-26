import './CharacterList.css';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

const CharacterList = ({ handleClick, charactersList, idActual }) => {

    return (
        <div className="characters__list">
            {charactersList.map(character => <CharacterInfo key={character._id} idActual={idActual} handleClick={() => handleClick(character._id)} character={character} />)}
        </div>
    )
}

export default CharacterList;

/*Contiene cada uno de las tarjetas que creamos en CharacterInfo.

Por cada personaje recibido de la lista de personajes que hemos guardado como estado
crea un componente CharacterInfo.*/