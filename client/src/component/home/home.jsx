import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/card';
import { getRecetas, getDieta, get_filterOrdenAlfabetico } from '..//..//redux/actions/actions';
import Paginado from '../paginado/paginado';
import Navbar from '../NavBar/Navbar';
import { DivNav, Divhome, DivContenido, DivPaginacion } from './homestyle';
function Home() {
  const dispatch = useDispatch();
  const recetas = useSelector(state => state.recipes);
  const dietas = useSelector(state => {
    let array = [];
    for (var t in state.types.data) { array.push(state.types.data[t].name); } return array;
  });
  const [order, setOrder] = useState('')

  useEffect(() => { dispatch(getRecetas()); dispatch(getDieta()) }, [])

  //PAGINACION
  // 
  const [curren, setcurren] = useState(1)
  const pg = 9;

  //movimiento del puntero
  const ultimo = curren * pg;
  const primero = ultimo - pg;
  const filtro = recetas.length ? recetas.slice(primero, ultimo) : [];
  console.log(filtro)
  const Page = (pageNumber) => { setcurren(pageNumber) };

  //CARD
  const fil = filtro && filtro.map((a) => {
    return <Card
      key={a.id}
      name={a.name}
      healtscore={a.healthScore}
      imagen={a.imagen}
      steps={a.steps}
      diet={a.diets}
    />
  })

  return (

    <Divhome>
      {<DivNav>
        <Navbar dietas={dietas} setOrder={setOrder} setcurren={setcurren} />
      </DivNav>}

      {recetas.length ?
        <DivContenido>
          {fil}
        </DivContenido>
        : <h2>loading...</h2>}

      {<DivPaginacion>   <Paginado recetas={recetas} pg={pg} Page={Page} />
      </DivPaginacion>}
    </Divhome>
  )
}

export default Home


