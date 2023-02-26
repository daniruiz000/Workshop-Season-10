import './Loader.css';

const Loader = () => {
    
    return (
        <>
            <div className='loader__container'></div>
            <h1 className='loader__text'>Cargando ...</h1>
        </>
    )
};

export default Loader;

/*Este componente nos servirá para mantener un mensaje de 'Cargando...' mientras se espera
la respuesta de la llamada a la API que estemos realizando, tanto para el cambiode página
como para cuando llama para cargar datos de detalle de un personaje.

Funciona condicionalmente en función del estado loadding y se aplica en el componente
Disneypedia comoen el componente CharacterDetail.*/