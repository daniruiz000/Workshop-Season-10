import './Characters.css'
import React from 'react';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import CharacterDetail from '../CharacterDetail/CharacterDetail';

const Characters = () => {

    const URL_API = 'https://api.disneyapi.dev/characters?page=';

    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState();
    const [charactersList, setCharactersList] = React.useState([]);
    const [idActual, setIdActual] = React.useState();



    const apiCall = (page) => {

        fetch(URL_API + page)
            .then(response => response.json())
            .then(data => {
                setCharactersList(data.data)
                setTotalPages(data.totalPages)
            })
    }

    React.useEffect(() => apiCall(page), [page])


    return (
        <div className="characters">
            <h1 className="characters__title">DISNEYPEDIA</h1>
            <div className="characters__list">
                {charactersList.map(character => <CharacterInfo handleClick={() => setIdActual(character._id)} character={character} />)}
            </div>
            {idActual && <CharacterDetail handleClick={() => setIdActual(null)} characterId={idActual} />}
            
            <div className="characters__container-buttons">
                <button onClick={() => {
                    if (page === 1) {
                        setPage(page)
                    } else {
                        setPage(page - 1)
                    }
                }}>ANTERIOR</button>
                <p>{page}</p>
                <button onClick={() => {
                    if (page < totalPages) {
                        setPage(page + 1)
                    } else {
                        setPage(page)
                    }
                }}>SIGUIENTE</button>
            </div>
        </div>
    );
}

export default Characters;