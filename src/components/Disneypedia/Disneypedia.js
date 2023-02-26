import './Disneypedia.css';
import React from 'react';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import Loader from '../Loader/Loader';
import NavigationPage from '../NavigationPage/NavigationPage';
import CharacterList from '../CharacterList/CharacterList';
import Title from '../Title/Title';

const Disneypedia = () => {

//URL de API para recoger una lista de personajes en función de un número de página:

    const URL_API = 'https://api.disneyapi.dev/characters?page=';

// Estados:

    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState();
    const [charactersList, setCharactersList] = React.useState([]);
    const [idActual, setIdActual] = React.useState();
    const [loadding, setLoadding] = React.useState(false);

/*Función de llamada a la Api para obtener una lista de personajes en función de la página deseada,
obtiene tambien el número total de páginas para poder realizar la paginación mediante el componente
NavigationPage.

Cuando se empieza a realizar la llamada se modificará el estado loadding para que se muestre el 
componente Loader hasta que se reciba la respuesta.
*/

    const apiCall = (page) => {
        setLoadding(true)
        fetch(URL_API + page)
            .then(response => response.json())
            .then(data => {
                setCharactersList(data.data)
                setTotalPages(data.totalPages)
                setLoadding(false)
            })
    };

//Llamaremos a la Api en función del estado de la página, mediante:

    React.useEffect(() => apiCall(page), [page])

/*
Devolverá el siguiente template mostrando unos componentes u otros en función de los
estados que hemos creado:
*/

    return (
        <div className="characters">
            <Title/>
            <CharacterList charactersList={charactersList} handleClick={setIdActual}/>
            <NavigationPage handleClick={setPage} totalPages={totalPages} page={page}/>
            {loadding && <Loader/>}
            {idActual && <CharacterDetail handleClick={() => setIdActual(null)} characterId={idActual} setState={setLoadding}/>}
 
        </div>
    );
}

export default Disneypedia;