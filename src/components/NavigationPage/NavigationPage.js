import React from 'react';

const NavigationPage = (props) => {

    return (
        <div className="characters__container-buttons">
            <button disabled={props.page === 1} onClick={() => (props.page === 1) ? props.handleClick(props.page) : props.handleClick(props.page - 1)}>ANTERIOR</button>
            <p>{props.page}</p>
            <button disabled={props.page === props.totalPages} onClick={() => (props.page < props.totalPages) ? props.handleClick(props.page + 1) : props.handleClick(props.page)}>SIGUIENTE</button>
        </div>
    )
}

export default NavigationPage;

/* 
Muestra los controles mediante botones que nos permiten navegar una página hacia
delante o hacia atrás modificando el estado de la página que nos sirve de referencia, 
que tambien se muestra.

Estan condicionados para no activarse si no existen páginas adyacentes.
*/