import logo from './logo.png';
import React, { useState, useEffect, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faListUl, faPencilAlt, faStore, faTrashAlt, faUserEdit, faVideo, faFilm, faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid';

import swalert from '@sweetalert/with-react';


const Admin = ({peliculas,setPeliculas}) => {  
    return (
        <div className="App">
            <div className='divCRUD'>
                <table>
                   <thead>
                        <tr>
                            <th style={{'width':'8vw'}}>{<FontAwesomeIcon icon={faStore} className='App-icono2'/>} </th>
                            <th>{<FontAwesomeIcon icon={faVideo} className='App-icono2'/>} </th>
                            <th>{<FontAwesomeIcon icon={faFilm} className='App-icono2'/>} </th>
                            <th>{<FontAwesomeIcon icon={faClock} className='App-icono2'/>} </th>
                            <th colSpan={2}  style={{'width':'12vw'}}>{<FontAwesomeIcon icon={faUserEdit} className='App-icono2'/>} </th>
                        </tr>
                    </thead> 
                    <tbody>
                        {peliculas.map((item,id) => (
                            <tr>
                                <td><input id={'sala'+id} type='text' value={peliculas[id][1]} autoComplete='off' disabled/> </td>
                                <td><img src={peliculas[id][3]} className='CRUD-imagen' alt=' '/>&nbsp;
                                    <label htmlFor={'myfile'+id} className='CRUD-boton-upload-img'><FontAwesomeIcon icon={faCloudUploadAlt} className='App-icono2'/></label>
                                    <input type='file' id={'myfile'+id} name="myfile" style={{'display':'none'}}></input> </td>
                                <td><input id={'pelicula'+id} type='text' defaultValue={peliculas[id][0]} autoComplete='off'/> </td>
                                <td><input id={'hora'+id} type='time' defaultValue={peliculas[id][2]} autoComplete='off' /> </td>
                                <td><button id={'botonActualizar'+id} className='botonCrud' onClick={()=>actualizar(peliculas,setPeliculas,id)}>{<FontAwesomeIcon icon={faPencilAlt} className='App-icono2'/>}</button></td>
                                <td><button id={'botonBorrar'+id} className='botonCrud' onClick={()=>borrar(peliculas,setPeliculas,id)}>{<FontAwesomeIcon icon={faTrashAlt} className='App-icono2'/>}</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}><button className='botonCrud' onClick={()=>actualizarTodo(peliculas,setPeliculas)}>{<FontAwesomeIcon icon={faPencilAlt} className='App-icono2'/>}{<FontAwesomeIcon icon={faListUl} className='App-icono2'/>}</button></td>
                            <td colSpan={3}><button className='botonCrud' onClick={()=>borrarTodo(peliculas,setPeliculas)}>{<FontAwesomeIcon icon={faTrashAlt} className='App-icono2'/>}{<FontAwesomeIcon icon={faListUl} className='App-icono2'/>}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function actualizar(peliculas,setPeliculas,id) {
    peliculas[id][0] = document.getElementById('pelicula' + (id+1)).value;
    peliculas[id][1] = document.getElementById('sala' + (id+1)).value;
    peliculas[id][2] = document.getElementById('hora' + (id+1)).value;
   
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} alt=' ' />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Actualización de cartelera:</h3>
          <span style={{'fontSize':'80px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
          <table style={{'marginRight':'auto','marginLeft':'auto'}}>
              <tbody>
                  <tr>
                      <td style={{'textAlign':'left'}}>Sala:</td>
                      <td>{id+1}</td>
                  </tr>
                  <tr>
                      <td style={{'textAlign':'left'}}>Película:</td>
                      <td>{peliculas[id][0]}</td>
                  </tr>
                  <tr>
                      <td style={{'textAlign':'left'}}>Hora:</td>
                      <td>{peliculas[id][2]}</td>
                  </tr>
              </tbody>
          </table>
        </div>
    );
}
function actualizarTodo(peliculas,setPeliculas) {
    for(let i=0; i<peliculas.length; i++){
        peliculas[i][0] = document.getElementById('pelicula' + (i+1)).value;
        peliculas[i][1] = document.getElementById('sala' + (i+1)).value;
        peliculas[i][2] = document.getElementById('hora' + (i+1)).value;
    }
   
    setPeliculas(peliculas);
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} alt=' ' />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Actualización de cartelera:</h3>
          <span style={{'fontSize':'150px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
        </div>
    );
}
function borrar(peliculas,setPeliculas,id) {
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} alt=' ' />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Película eliminada:</h3>
          <span style={{'fontSize':'80px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
          <table style={{'marginRight':'auto','marginLeft':'auto'}}>
              <tbody>
                  <tr>
                      <td style={{'textAlign':'left'}}>Sala:</td>
                      <td>{id+1}</td>
                  </tr>
                  <tr>
                      <td style={{'textAlign':'left'}}>Película:</td>
                      <td>{peliculas[id][0]}</td>
                  </tr>
                  <tr>
                      <td style={{'textAlign':'left'}}>Hora:</td>
                      <td>{peliculas[id][2]}</td>
                  </tr>
              </tbody>
          </table>
        </div>
    );
    peliculas[id][0] = '';
    peliculas[id][2] = '';
    peliculas[id][3] = '';
    setPeliculas(peliculas);

    
}
function borrarTodo(peliculas,setPeliculas) {
    for(let i=0; i<peliculas.length; i++){
        peliculas[i][0] = '';
        peliculas[i][2] = '';
        peliculas[i][3] = '';
    }
    setPeliculas(peliculas);
    
    swalert(
        <div>
          <img src={logo} style={{'height':'10vmin','marginLeft':'-120px'}} alt=' ' />
          <h1 style={{'marginTop':'-70px','marginLeft':'70px'}}> Cine </h1>
          <hr></hr>
          <h3> Películas eliminadas:</h3>
          <span style={{'fontSize':'150px'}}><FontAwesomeIcon icon={faCheck} color='green'/></span>
        </div>
    );
}


export default Admin;
