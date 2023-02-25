import './CharacterDetail.css';
import React from 'react';

const CharacterDetail = (props) => {

    const URL_API_CHARACTER = 'https://api.disneyapi.dev/characters/';
    const [character, setCharacter] = React.useState({});

    const callApiCharacter = () => {
        if (props.characterId) {
            fetch(URL_API_CHARACTER + props.characterId)
                .then(response => response.json())
                .then(data => {
                    setCharacter(data)
                })
        }
    }

    React.useEffect(() => callApiCharacter(), [props.characterId])

    return (
        <div onClick = {props.handleClick}>
            <h1>{character.name}</h1>
            {character.imageUrl && <img src={character.imageUrl} />}
            {(character.allies?.length > 0) && <p>Aliados: {character.allies.toString().replaceAll(',', ', ')}</p>}
            {(character.enemies && character.enemies[0]) && <p>Enemigos: {character.enemies.toString().replaceAll(',', ', ')}</p>}
            {(character.films?.length > 0) && <p>Películas: {character.films.toString().replaceAll(',', ', ')}</p>}
            {(character.parkAttractions && character.parkAttractions[0]) && <p>Parque de atracciones: {character.parkAttractions.toString().replaceAll(',', ', ')}</p>}
            {(character.shortFilms && character.shortFilms[0]) && <p>Cortometrajes: {character.shortFilms.toString().replaceAll(',', ', ')}</p>}
            {(character.tvShows && character.tvShows[0]) && <p>Series de tv: {character.tvShows.toString().replaceAll(',', ', ')}</p>}
            {(character.videoGames && character.videoGames[0]) && <p>Videojuegos: {character.videoGames.toString().replaceAll(',', ', ')}</p>}

        </div>
    )
}

export default CharacterDetail;