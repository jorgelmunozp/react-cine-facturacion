import logo from './logo.png';
import './App.css';

import React, { useState, useEffect, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faUser, faHome, faShoppingCart, faStore } from '@fortawesome/fontawesome-free-solid';

import Home from './Home';
import Admin from './Admin';

import carteleraPeliculasBD from './peliculas.json';

const tituloHeader = 'Cine';
const menuOpcion = 1;
const sillastotal = [20,20,20];

let carteleraPeliculas = Object.entries(carteleraPeliculasBD);  // Object.entries convierte tanto clave y valor. Cada par es convertido a un arreglo


function App() {
  const [menu, setMenu] = useState(menuOpcion);
  const [peliculas, setPeliculas] = useState(carteleraPeliculas[0][1]);  //Selector de películas
  let [pelicula, setPelicula] = useState(peliculas[0][0]);               
  let [sala, setSala] = useState(peliculas[0][1]);
  let [poster, setPoster] = useState(peliculas[0][3]);

  let [cantidadSillas, setCantidadSillas] = useState(sillastotal);
  let [sillasCarrito, setSillasCarrito] = useState([0,0,0]);  //Carrito de compras (3 carros, 1 por cada sala - 3 salas)

  
  return (
    <div className="App">
      <header className="App-header">
        <table className='App-slogan'>
          <thead>
            <tr>
              <td><img src={logo} className="App-logo" alt="logo"/></td>
              <td><h1>{tituloHeader}</h1></td>
            </tr>
          </thead>
        </table>
        <table className='App-tablero'>
          <tbody>
            <tr>
              <td><h3><FontAwesomeIcon icon={faStore} className='App-icono'/></h3></td>
              <td><h3>{sala}</h3></td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td><h3><FontAwesomeIcon icon={faCouch} className='App-icono'/></h3></td>
              <td><h3>{cantidadSillas[sala-1]}</h3></td>
              <td>&nbsp;&nbsp;&nbsp;</td>
              <td><h3><FontAwesomeIcon icon={faShoppingCart} className='App-icono'/></h3></td>
              <td><h3>{sillasCarrito[sala-1]}</h3></td>
            </tr>
          </tbody>
        </table> 
        <nav className='App-nav'>
            <button onClick={() => setMenu(1)} className='App-nav-item'><FontAwesomeIcon icon={faHome} className='App-icono2'/></button>
            <button onClick={() => setMenu(2)} className='App-nav-item'><FontAwesomeIcon icon={faUser} className='App-icono2'/></button>
        </nav>
      </header>
      <body className="App-body">
        <Menu menu={menu} tituloHeader={tituloHeader} pelicula={pelicula} setPelicula={setPelicula}  sala={sala} setSala={setSala} sillasCarrito={sillasCarrito} setSillasCarrito={setSillasCarrito} cantidadSillas={cantidadSillas} setCantidadSillas={setCantidadSillas} peliculas={peliculas} setPeliculas={setPeliculas} poster={poster} setPoster={setPoster}/>
      </body>
    </div>
  );
}


const Menu = ({tituloHeader,menu,pelicula,setPelicula,sala,setSala,sillasCarrito,setSillasCarrito,cantidadSillas,setCantidadSillas,peliculas,setPeliculas,poster,setPoster}) => {        //Componente para elegir juego a renderizar
  if(menu === 1){
    return <Home tituloHeader={tituloHeader} pelicula={pelicula} setPelicula={setPelicula} sala={sala} setSala={setSala} sillasCarrito={sillasCarrito} setSillasCarrito={setSillasCarrito} cantidadSillas={cantidadSillas} setCantidadSillas={setCantidadSillas} peliculas={peliculas} setPeliculas={setPeliculas} poster={poster} setPoster={setPoster}/>;
  }else if(menu === 2){
    return <Admin peliculas={peliculas} setPeliculas={setPeliculas}/>;
  }
}



// export default App;


export {
  App as default,
}
  