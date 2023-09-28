import logo from './logo.png';
import React, { useState, useEffect, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faPencilAlt, faStore, faTrashAlt, faUserEdit, faVideo } from '@fortawesome/fontawesome-free-solid';

import swalert from '@sweetalert/with-react';

const Admin = ({peliculas,setPeliculas}) => {  
    return (
        <div className="App">
            <div className='divCRUD'>
                <table>
                   <thead>
                        <tr>
                            <th>{<FontAwesomeIcon icon={faStore} className='App-icono2'/>} </th>
                            <th>{<FontAwesomeIcon icon={faVideo} className='App-icono2'/>} </th>
                            <th>{<FontAwesomeIcon icon={faClock} className='App-icono2'/>} </th>
                            <th colSpan={2}>{<FontAwesomeIcon icon={faUserEdit} className='App-icono2'/>} </th>
                        </tr>
                    </thead> 
                    <tbody>
                        {peliculas.map((item,id) => (
                            <tr>
                                <td><input id={'sala'+id} type='text' defaultValue={item[1]} min='1' max='3' autoComplete='off' disabled/> </td>
                                <td><input id={'pelicula'+id} type='text' defaultValue={item[0]} autoComplete='off'/> </td>
                                <td><input id={'hora'+id} type='time' defaultValue={item[2]} autoComplete='off' /> </td>
                                <td><button id={'botonActualizar'+id} className='botonCrud' onClick={()=>actualizar(peliculas,setPeliculas,id)}>{<FontAwesomeIcon icon={faPencilAlt} className='App-icono2'/>}</button></td>
                                <td><button id={'botonBorrar'+id} className='botonCrud' onClick={()=>borrar(peliculas,setPeliculas,id)}>{<FontAwesomeIcon icon={faTrashAlt} className='App-icono2'/>}</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}><button className='botonCrud' onClick={()=>actualizarTodo(peliculas,setPeliculas)}>{<FontAwesomeIcon icon={faPencilAlt} className='App-icono2'/>}</button></td>
                            <td colSpan={3}><button className='botonCrud' onClick={()=>borrarTodo(peliculas,setPeliculas)}>{<FontAwesomeIcon icon={faTrashAlt} className='App-icono2'/>}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function actualizar(peliculas,setPeliculas,id) {
    peliculas[id][0] = document.getElementById('pelicula' + id).value;
    peliculas[id][1] = document.getElementById('sala' + id).value;
    peliculas[id][2] = document.getElementById('hora' + id).value;

   
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Actualización de cartelera:</h3>
          <span style={{'fontSize':'80px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
          <table>
              <tbody>
                  <tr>
                      <td>Sala:</td>
                      <td>{id+1}</td>
                  </tr>
                  <tr>
                      <td>Película:</td>
                      <td>{peliculas[id][0]}</td>
                  </tr>
                  <tr>
                      <td>Hora:</td>
                      <td>{peliculas[id][2]}</td>
                  </tr>
              </tbody>
          </table>
        </div>
    );
}
function actualizarTodo(peliculas,setPeliculas) {
    for(let i=0; i<peliculas.length; i++){
        peliculas[i][0] = document.getElementById('pelicula' + i).value;
        peliculas[i][1] = document.getElementById('sala' + i).value;
        peliculas[i][2] = document.getElementById('hora' + i).value;
    }
   
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Actualización de cartelera:</h3>
          <span style={{'fontSize':'150px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
        </div>
    );
}
function borrar(peliculas,setPeliculas,id) {
    peliculas[id][0] = '';
    peliculas[id][2] = '';
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Película eliminada:</h3>
          <span style={{'fontSize':'150px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
        </div>
    );
}
function borrarTodo(peliculas,setPeliculas,id) {
    for(let i=0; i<peliculas.length; i++){
        peliculas[i][0] = '';
        peliculas[i][2] = '';
    }
   
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Película eliminada:</h3>
          <span style={{'fontSize':'150px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
        </div>
    );
}


export default Admin;
