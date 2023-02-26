import React from 'react';
import Disneypedia from './components/Disneypedia/Disneypedia';

function App() {

  return (
    <div className="app">
      <Disneypedia/>
    </div>
  );
}

export default App;

/* App que nos muestra una navegación sobre los personajes de Disney representados 
mediante una tarjeta con la imagen del personaje y su nombre.

Los datos necesarios nos vienen dados por un API que iremos llamando y nos irá
suministrando dichos personajes por el número página y que iremos modificando mediante
los botones de navegación.

Podremos pinchar en cada uno de las tarjetas y nos mostrará una tarjeta detalle con
más información sobre el personaje que hemos pinchado.

Cuando volvemos a pinchar en su tarjeta o en el fondo translucido que la envuelve 
volveremos a la lista de personajes*/