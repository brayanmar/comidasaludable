import React from 'react'
import Barradebusqueda from '../barradebusqueda/barradebusqueda';
import { useNavigate } from 'react-router-dom';
import Ordenar from '../ordenar/ordenar';
import { DivItems, Divnavnav } from './navstyle';
import { Button } from '../styles/Style';
function Navbar({ dietas, setOrder, setcurren }) {
  const history = useNavigate()
  const form = (e) => {
    e.preventDefault();
    history('/form')
  }
  return (
    <Divnavnav>
      {<DivItems><Barradebusqueda /></DivItems>}
      {<DivItems><Button type='submit' onClick={(e) => form(e)} >Crea tu receta</Button></DivItems>}
      {<DivItems><Ordenar dietas={dietas} setOrder={setOrder} setcurren={setcurren} /></DivItems>}
    </Divnavnav>
  )
}

export default Navbar