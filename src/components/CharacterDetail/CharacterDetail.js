import './CharacterDetail.css';
import React from 'react';
import Loader from '../Loader/Loader';

const CharacterDetail = (props) => {

/*
Url especifica para la solicitud de datos de personaje a la que añadiremos el id para mostrar
el personaje deseado:
*/

    const URL_API_CHARACTER = 'https://api.disneyapi.dev/characters/';

//Estado para almacenar los datos del personaje sobre el que jhemos hecho la consulta:

    const [character, setCharacter] = React.useState({});
    
/*
Función de llamada para obtener los datos de personaje del id que hemos añadido a la URL, 
y a la que añadiremos que mientras se recibe la llamada el estado loadding cambie para
mostrar el componente Loader mientras tanto:
*/

    const callApiCharacter = () => {
        if (props.characterId) {
            props.setState(true)
            fetch(URL_API_CHARACTER + props.characterId)
                .then(response => response.json())
                .then(data => {
                    setCharacter(data)
                    props.setState(false)
                })
        }
    };

//Realizará la llamada en función del id que recibamos mediante props:

    React.useEffect(callApiCharacter, [props.characterId]);

/*
Nos devolverá un template con los datos del personaje en el cúal hemos pinchado,
y mientrás se carga se mostrará el elemento Loadder.

Sólo se mostrarán los datos que se reciban ya que algunos personajes no tienen todas
las propiedades definidas.

Cuando se pulsa en el template se vuelve a la paginación.
*/

    return (
        <>  {props.loadding === true && <Loader />}
            <div className='character-detail__container' onClick={props.handleClick}></div>
            <div className='character-detail' onClick={props.handleClick}>
                <h1 className='character-detail__title'>{character.name}</h1>
                {character.imageUrl?.length > 0 && <img className='character-detail__img' src={character.imageUrl} alt='Imagen de personaje' />}
                {character.allies?.length > 0 && <p className='character-detail__text'><span>Aliados:</span> {character.allies.toString().replaceAll(',', ', ')}</p>}
                {character.enemies?.length > 0 && <p className='character-detail__text'><span>Enemigos:</span> {character.enemies.toString().replaceAll(',', ', ')}</p>}
                {character.films?.length > 0 && <p className='character-detail__text'><span>Películas:</span> {character.films.toString().replaceAll(',', ', ')}</p>}
                {character.parkAttractions?.length > 0 && <p className='character-detail__text'><span>Parque de atracciones:</span> {character.parkAttractions.toString().replaceAll(',', ', ')}</p>}
                {character.shortFilms?.length > 0 && <p className='character-detail__text'><span>Cortometrajes:</span> {character.shortFilms.toString().replaceAll(',', ', ')}</p>}
                {character.tvShows?.length > 0 && <p className='character-detail__text'><span>Series de tv:</span> {character.tvShows.toString().replaceAll(',', ', ')}</p>}
                {character.videoGames?.length > 0 && <p className='character-detail__text'><span>Videojuegos:</span> {character.videoGames.toString().replaceAll(',', ', ')}</p>}
            </div>
        </>
    )
};

export default CharacterDetail;