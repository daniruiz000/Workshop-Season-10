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
        <div className='character-detail' onClick = {props.handleClick}>
            <h1 className='character-detail__title'>{character.name}</h1>
            {character.imageUrl && <img className='character-detail__img'src={character.imageUrl} />}
            {(character.allies?.length > 0) && <p className='character-detail__text'><span>Aliados:</span> {character.allies.toString().replaceAll(',', ', ')}</p>}
            {(character.enemies && character.enemies[0]) && <p className='character-detail__text'><span>Enemigos:</span> {character.enemies.toString().replaceAll(',', ', ')}</p>}
            {(character.films?.length > 0) && <p className='character-detail__text'><span>Películas:</span> {character.films.toString().replaceAll(',', ', ')}</p>}
            {(character.parkAttractions && character.parkAttractions[0]) && <p className='character-detail__text'><span>Parque de atracciones:</span> {character.parkAttractions.toString().replaceAll(',', ', ')}</p>}
            {(character.shortFilms && character.shortFilms[0]) && <p className='character-detail__text'><span>Cortometrajes:</span> {character.shortFilms.toString().replaceAll(',', ', ')}</p>}
            {(character.tvShows && character.tvShows[0]) && <p className='character-detail__text'><span>Series de tv:</span> {character.tvShows.toString().replaceAll(',', ', ')}</p>}
            {(character.videoGames && character.videoGames[0]) && <p className='character-detail__text'><span>Videojuegos:</span> {character.videoGames.toString().replaceAll(',', ', ')}</p>}

        </div>
    )
}

export default CharacterDetail;