import logo from './logo.png';

import React, { useState, useEffect, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faCaretRight, faClock, faCouch, faDollarSign, faFilm, faMoneyBillAlt, faMoneyBillWave, faShoppingCart, faStore, faTicketAlt, faVideo, faWallet } from '@fortawesome/fontawesome-free-solid';

import swalert from '@sweetalert/with-react';

//import { tituloHeader,sala,setSala,sillasCarrito,setSillasCarrito,cantidadSillas,setCantidadSillas,peliculas,setPeliculas,poster,setPoster } from './App';

import imagenPelicula1 from './images/spiderman.png';
import imagenPelicula2 from './images/starwars.png';
import imagenPelicula3 from './images/toystory.png';
import trailerPelicula1 from './videos/spiderman.mp4';
import trailerPelicula2 from './videos/starwars.mp4';
import trailerPelicula3 from './videos/toystory.mp4';

const precioboleto = 8000;
var date = new Date();     
var fecha = date.toLocaleDateString();                 //Lee la fecha actual del sistema   
var horaLocal = date.toLocaleTimeString([], {timeStyle: 'short', hour12: true});     //Lee la hora actual del sistema

const Home = ({tituloHeader,menu,pelicula,setPelicula,sala,setSala,sillasCarrito,setSillasCarrito,cantidadSillas,setCantidadSillas,peliculas,setPeliculas,poster,setPoster}) => {  

  const Trailer = () => {                                //Grafica la lista de sillas seleccionadas en el carrito
          const trailer = <video src={trailerPelicula1} poster={imagenPelicula1} autoPlay loop controls />
          return trailer;
          // return peliculas[0][4];
    };


    let [horaPelicula, setHoraPelicula] = useState(peliculas[0][2]);

    const Add = peliculas.map(Add => Add[0]);
    const selectorPelicula = (e) => {pelicula = peliculas[e.target.value][0];
                                     sala = peliculas[e.target.value][1];
                                     horaPelicula = peliculas[e.target.value][2];
                                     setPelicula(pelicula);
                                     setSala(sala);
                                     setHoraPelicula(horaPelicula);
                                    };
    
    let [sillas, setSillas] = useState([[[0,0,0,0],
                                         [0,0,0,0],
                                         [0,0,0,0],
                                         [0,0,0,0],
                                         [0,0,0,0]],[[0,0,0,0],
                                                     [0,0,0,0],
                                                     [0,0,0,0],
                                                     [0,0,0,0],
                                                     [0,0,0,0]],[[0,0,0,0],
                                                                 [0,0,0,0],
                                                                 [0,0,0,0],
                                                                 [0,0,0,0],
                                                                 [0,0,0,0]]]);        //Matriz de posiciones de sillas en cada sala
  
    let [sillasFactura, setsillasFactura] = useState([]);
    let [numeroTicket, setNumeroTicket] = useState(0);
    let [hora, setHora] = useState(horaLocal);
  
    const [lista, setLista] = useState(sillasFactura);        //Lista Sillas seleccionadas
    const Lista = ({lista}) => {                                //Grafica la lista de sillas seleccionadas en el carrito
      return (
          <ul className='ticketList' >
            {lista.map((item) => {
                return ( <li key={item}>{item}</li> )
            })}
          </ul>
      );
    };
    
    const [checkedsillaA1, setCheckedA1] = useState(false);
    const [checkedsillaA2, setCheckedA2] = useState(false);
    const [checkedsillaA3, setCheckedA3] = useState(false);
    const [checkedsillaA4, setCheckedA4] = useState(false);
    const [checkedsillaB1, setCheckedB1] = useState(false);
    const [checkedsillaB2, setCheckedB2] = useState(false);
    const [checkedsillaB3, setCheckedB3] = useState(false);
    const [checkedsillaB4, setCheckedB4] = useState(false);
    const [checkedsillaC1, setCheckedC1] = useState(false);
    const [checkedsillaC2, setCheckedC2] = useState(false);
    const [checkedsillaC3, setCheckedC3] = useState(false);
    const [checkedsillaC4, setCheckedC4] = useState(false);
    const [checkedsillaD1, setCheckedD1] = useState(false);
    const [checkedsillaD2, setCheckedD2] = useState(false);
    const [checkedsillaD3, setCheckedD3] = useState(false);
    const [checkedsillaD4, setCheckedD4] = useState(false);
    const [checkedsillaE1, setCheckedE1] = useState(false);
    const [checkedsillaE2, setCheckedE2] = useState(false);
    const [checkedsillaE3, setCheckedE3] = useState(false);
    const [checkedsillaE4, setCheckedE4] = useState(false);
  
    const [checkedsilla, setCheckedSilla] =  useState([[[false,false,false,false],
                                                        [false,false,false,false],
                                                        [false,false,false,false],
                                                        [false,false,false,false],
                                                        [false,false,false,false]],[[false,false,false,false],
                                                                                    [false,false,false,false],
                                                                                    [false,false,false,false],
                                                                                    [false,false,false,false],
                                                                                    [false,false,false,false]],[[false,false,false,false],
                                                                                                                [false,false,false,false],
                                                                                                                [false,false,false,false],
                                                                                                                [false,false,false,false],
                                                                                                                [false,false,false,false]]]);        //Matriz de posiciones de sillas vendidas en cada sala
  
    useEffect(() => {
      document.title = `S${[sala]}: ${cantidadSillas[sala-1]} sillas`;    
    });

    
    return (
        <div className="App">
            <div className="App-content">
              <div className="App-content-top">
                <div className="divTrailer">
                  <table className="tableContent" border="1">
                    <thead>
                      <tr>
                        <th><FontAwesomeIcon icon={faFilm} className='App-icono-blanco'/></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Trailer /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="divCartelera">
                  <table className="tableContent" border="1">
                    <thead>
                      <tr>
                        <th style={{'width':'4.25vw','textAlign':'center'}}>{<FontAwesomeIcon icon={faVideo} className='App-icono-blanco'/>}</th>
                        <th style={{'width':'12.3vw','textAlign':'center'}}>{<FontAwesomeIcon icon={faFilm} className='App-icono-blanco'/>}</th>
                        <th style={{'width':'4.5vw','textAlign':'center'}}>{<FontAwesomeIcon icon={faStore} className='App-icono-blanco'/>}</th>
                        <th style={{'width':'6.5vw','textAlign':'center'}}>{<FontAwesomeIcon icon={faClock} className='App-icono-blanco'/>}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5}>
                          <marquee width="100%" height="50vh" behavior="scroll" direction="up" scrollamount="1" scrolldelay='20' truespeed='true'> 
                            { peliculas.map(item => (
                                <>
                                  <tr>
                                    <td className='Cartelera-item Cartelera-imagen'><img src={item[3]} className='Cartelera-imagen' alt=' '/></td>
                                    <td className='Cartelera-item' style={{'padding':'0 0.5vw 0 0.5vw'}}>&nbsp;{item[0]}&nbsp;</td>
                                    <td className='Cartelera-item' style={{'padding':'0 1.5vw 0 1.5vw'}}>&nbsp;{item[1]}&nbsp;</td>
                                    <td className='Cartelera-item'>&nbsp;{item[2]}&nbsp;</td>
                                  </tr> 
                                </> )) } 
                          </marquee>
                        </td>
                      </tr>
                    </tbody>
                  </table>  
                </div>
                <div className='divDatos'>
                    <table className="tableContent" border='1' className='tableDatos'>
                        <thead>
                          <tr>
                              <th colSpan={5} className='headerDatos'><FontAwesomeIcon icon={faShoppingCart} className='App-icono-blanco' style={{'padding':'1vh 0 1vh 0'}}/></th>
                          </tr>
                          <tr className='headerDatos'>
                              <th colSpan={2}><FontAwesomeIcon icon={faVideo} className='App-icono-blanco'/></th>
                              <th><FontAwesomeIcon icon={faStore} className='App-icono-blanco'/></th>
                              <th><FontAwesomeIcon icon={faCalendarAlt} className='App-icono-blanco'/></th>
                              <th><FontAwesomeIcon icon={faClock} className='App-icono-blanco'/></th>
                          </tr>
                          <tr>
                              <td colSpan={2}><select onChange={(e) => {selectorPelicula(e);setSala(sala)}} className="selectorPelicula" defaultValue={'0'} value={sala-1}>{Add.map((peliculas, sala) => <option key={sala} value={sala}>{peliculas}</option>)}</select></td>
                              <td><select onChange={(e) => selectorPelicula(e)} className="selectorPelicula" defaultValue={sala-1} value={sala-1}>{Add.map((peliculas, sala) => <option key={sala} value={sala}>{sala+1}</option>)}</select></td>
                              <td>{fecha}</td>
                              <td>{horaPelicula}</td>
                          </tr>  
                          <tr className='headerDatos'>
                              <th><FontAwesomeIcon icon={faCouch} className='App-icono-blanco'/></th>  
                              <th><FontAwesomeIcon icon={faTicketAlt} className='App-icono-blanco'/></th>  
                              <th colSpan={2}><FontAwesomeIcon icon={faMoneyBillAlt} className='App-icono-blanco'/></th>  
                              <th><FontAwesomeIcon icon={faDollarSign} className='App-icono-blanco'/></th>  
                          </tr>  
                        </thead>  
                        <tbody>
                          <tr>
                              <td><Lista lista={lista}/></td>
                              <td>{sillasCarrito[sala-1]}</td>
                              <td colSpan={2}>$ {precioboleto}</td>
                              <td>$ {sillasCarrito[sala-1] * precioboleto}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                              <td colSpan={5}><button onClick={() => setSillas(facturar(tituloHeader,sillas,setSillas,cantidadSillas,setCantidadSillas,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura,lista,setLista,Lista,pelicula,sala,horaPelicula,numeroTicket,setNumeroTicket))}><FontAwesomeIcon icon={faWallet} className='App-icono-blanco'/>&nbsp;<FontAwesomeIcon icon={faCaretRight} className='App-icono-blanco'/></button></td>
                          </tr>  
                        </tfoot>
                    </table>
                  </div> 
                </div>       
              </div>
              <div className="App-content-bottom">
                <div className='divSillas'>
                  <table id='sillasIzquierda'>
                      <thead>
                      <tr>
                          <th></th>  
                          <th>1</th>  
                          <th>2</th>  
                      </tr>  
                      </thead>  
                      <tbody>                   
                      <tr>
                          <td><b>D</b></td>
                          <td><input type="checkbox" value="D1" checked={checkedsilla[sala-1][3][0]} onChange={(e) => setCheckedD1(checkSilla(e.target.checked,e.target.value,sillas,setSillas,3,0,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="D2" checked={checkedsilla[sala-1][3][1]} onChange={(e) => setCheckedD2(checkSilla(e.target.checked,e.target.value,sillas,setSillas,3,1,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>   
                      <tr>
                          <td><b>E</b></td>
                          <td><input type="checkbox" value="E1" checked={checkedsilla[sala-1][4][0]} onChange={(e) => setCheckedE1(checkSilla(e.target.checked,e.target.value,sillas,setSillas,4,0,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="E2" checked={checkedsilla[sala-1][4][1]} onChange={(e) => setCheckedE2(checkSilla(e.target.checked,e.target.value,sillas,setSillas,4,1,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>
                      </tbody>
                  </table>
                  &nbsp;&nbsp;
                  <table id='sillasCentro'>
                      <thead>
                      <tr>
                          <th></th>  
                          <th>1</th>  
                          <th>2</th>  
                          <th>3</th>  
                          <th>4</th> 
                      </tr>  
                      </thead>  
                      <tbody>
                      <tr>
                          <td><b>A</b></td>
                          <td><input type="checkbox" value="A1" checked={checkedsilla[sala-1][0][0]} onChange={(e) => setCheckedA1(checkSilla(e.target.checked,e.target.value,sillas,setSillas,0,0,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="A2" checked={checkedsilla[sala-1][0][1]} onChange={(e) => setCheckedA2(checkSilla(e.target.checked,e.target.value,sillas,setSillas,0,1,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="A3" checked={checkedsilla[sala-1][0][2]} onChange={(e) => setCheckedA3(checkSilla(e.target.checked,e.target.value,sillas,setSillas,0,2,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="A4" checked={checkedsilla[sala-1][0][3]} onChange={(e) => setCheckedA4(checkSilla(e.target.checked,e.target.value,sillas,setSillas,0,3,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>
                      <tr>
                          <td><b>B</b></td>
                          <td><input type="checkbox" value="B1" checked={checkedsilla[sala-1][1][0]} onChange={(e) => setCheckedB1(checkSilla(e.target.checked,e.target.value,sillas,setSillas,1,0,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="B2" checked={checkedsilla[sala-1][1][1]} onChange={(e) => setCheckedB2(checkSilla(e.target.checked,e.target.value,sillas,setSillas,1,1,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="B3" checked={checkedsilla[sala-1][1][2]} onChange={(e) => setCheckedB3(checkSilla(e.target.checked,e.target.value,sillas,setSillas,1,2,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="B4" checked={checkedsilla[sala-1][1][3]} onChange={(e) => setCheckedB4(checkSilla(e.target.checked,e.target.value,sillas,setSillas,1,3,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>                      
                      <tr>
                          <td><b>C</b></td>
                          <td><input type="checkbox" value="C1" checked={checkedsilla[sala-1][2][0]} onChange={(e) => setCheckedC1(checkSilla(e.target.checked,e.target.value,sillas,setSillas,2,0,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="C2" checked={checkedsilla[sala-1][2][1]} onChange={(e) => setCheckedC2(checkSilla(e.target.checked,e.target.value,sillas,setSillas,2,1,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="C3" checked={checkedsilla[sala-1][2][2]} onChange={(e) => setCheckedC3(checkSilla(e.target.checked,e.target.value,sillas,setSillas,2,2,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="C4" checked={checkedsilla[sala-1][2][3]} onChange={(e) => setCheckedC4(checkSilla(e.target.checked,e.target.value,sillas,setSillas,2,3,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>   
                      </tbody>
                  </table>
                  &nbsp;&nbsp;
                  <table id='sillasDerecha'>
                      <thead>
                      <tr>
                          <th></th>  
                          <th>3</th>  
                          <th>4</th>  
                      </tr>  
                      </thead>  
                      <tbody>                   
                      <tr>
                          <td><b>D</b></td>
                          <td><input type="checkbox" value="D3" checked={checkedsilla[sala-1][3][2]} onChange={(e) => setCheckedD3(checkSilla(e.target.checked,e.target.value,sillas,setSillas,3,2,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="D4" checked={checkedsilla[sala-1][3][3]} onChange={(e) => setCheckedD4(checkSilla(e.target.checked,e.target.value,sillas,setSillas,3,3,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>   
                      <tr>
                          <td><b>E</b></td>
                          <td><input type="checkbox" value="E3" checked={checkedsilla[sala-1][4][2]} onChange={(e) => setCheckedE3(checkSilla(e.target.checked,e.target.value,sillas,setSillas,4,2,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                          <td><input type="checkbox" value="E4" checked={checkedsilla[sala-1][4][3]} onChange={(e) => setCheckedE4(checkSilla(e.target.checked,e.target.value,sillas,setSillas,4,3,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura))} /></td>
                      </tr>
                      </tbody>
                  </table>
                </div>
              </div>
        </div>
    )
}


function checkSilla(checked,silla,sillas,setsillas,fil,col,sala,checkedsilla,setCheckedSilla,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura){ 
    sillasCarrito = [0,0,0];
    if(checked === true){
      sillas[sala-1][fil][col] = 1;
      sillasFactura.push(silla);
      checkedsilla[sala-1][fil][col] = true;
    } else if(checked === false){
      sillas[sala-1][fil][col] = 0;
      sillasFactura.pop(silla); 
      checkedsilla[sala-1][fil][col] = false;
    }
    setsillasFactura(sillasFactura);
    setsillas(sillas);
    setCheckedSilla(checkedsilla);
  
    for (let i = 0; i < sillas[0].length; i++) {
      for (let j = 0; j < sillas[0][0].length; j++) {
        sillasCarrito[sala-1] += sillas[sala-1][i][j];
      }
    }
    setSillasCarrito(sillasCarrito);
  
    return checked;
  }
  
  
  function facturar(tituloHeader,sillas,setSillas,cantidadSillas,setCantidadSillas,sillasCarrito,setSillasCarrito, sillasFactura, setsillasFactura,lista,setLista,Lista,pelicula,sala,horaPelicula,numeroTicket,setNumeroTicket){
    if(sillasCarrito[sala-1] > 0){
      cantidadSillas[sala-1] -= sillasCarrito[sala-1];
      numeroTicket++;
      setCantidadSillas(cantidadSillas);
      setNumeroTicket(numeroTicket);
      
      swalert(
        <div>
          <table className='App-slogan-factura'>
            <tr>
              <td><img src={logo} className="App-logo" alt=' '/></td>
              <td><h1>{tituloHeader}</h1></td>
            </tr>
          </table>
          <hr></hr>
          <table style={{'marginLeft':'auto','marginRight':'auto'}}>
            <thead>
              <tr>
                <td>Fecha: </td>
                <td>{fecha}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>Hora: </td>
                <td>{horaLocal}</td>
              </tr>    
              <tr>
                <td colSpan={5}><h3 style={{'textAlign':'center'}}>Ticket: {numeroTicket}</h3></td>
              </tr>       
            </thead>          
            <tbody>
              <tr>
                <td><FontAwesomeIcon icon={faCalendarAlt}/></td>
                <td>{fecha}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><FontAwesomeIcon icon={faClock}/></td>
                <td>{horaPelicula}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
              <td><FontAwesomeIcon icon={faVideo}/> </td>
                <td>{pelicula}</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><FontAwesomeIcon icon={faStore}/></td>
                <td>Sala {sala}</td>
              </tr>
            </tfoot>
          </table>
          <br/>
          <table border='1' style={{'marginLeft':'auto','marginRight':'auto'}}>
            <tbody>
              <tr style={{'backgroundColor':'#282c34','color':'#fff'}}>
                <td><FontAwesomeIcon icon={faCouch}/></td>
                <td><FontAwesomeIcon icon={faTicketAlt}/></td>
                <td><FontAwesomeIcon icon={faMoneyBillAlt}/></td>
                <td><FontAwesomeIcon icon={faDollarSign}/></td>
              </tr>
              <tr>
                <td><Lista lista={lista}/></td>
                <td>{sillasCarrito[sala-1]}</td>
                <td>$ {precioboleto}</td>
                <td>$ {sillasCarrito[sala-1]*precioboleto}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
  
      for (let i = 0; i < sillas[0].length; i++) {
        for (let j = 0; j < sillas[0][0].length; j++) {
          sillas[sala-1][i][j] = 0;
        }
      }
      setSillas(sillas);
      sillasFactura = [];
      setsillasFactura(sillasFactura);
      sillasCarrito = [0,0,0];
      setSillasCarrito(sillasCarrito);
      lista = sillasFactura;
      setLista(lista);
    }
    return sillas;
  }
  
  


export default Home;