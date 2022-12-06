import React from 'react'
import { useDispatch } from 'react-redux';
import { get_filterOrdenAlfabetico, get_filterOrdenScore, get_filterOrdenDieta } from '..//..//redux/actions/actions';
import { Select } from '../styles/Style';
function Ordenar({ dietas, setOrder, setcurren }) {
  const dispatch = useDispatch();
  //FILTRO POR ORDEN ALFABETICO
  const handelclick = (orden) => {
    orden.preventDefault()
    dispatch(get_filterOrdenAlfabetico(orden.target.value))
    setcurren(1)
    setOrder(`${orden.target.value}`)
  };
  function handelScore(score) {
    score.preventDefault()
    dispatch(get_filterOrdenScore(score.target.value))
    setcurren(1)
    setOrder(`${score.target.value}`)
  };
  function handelDietas(diet) {
    diet.preventDefault()
    dispatch(get_filterOrdenDieta(diet.target.value))
    setcurren(1)
    setOrder(`${diet.target.value}`)
  };

  return (
    <div>
      <Select defaultValue='filtro de orden' onChange={(evt) => handelclick(evt)}>
        <option disabled>Filter by Order</option>
        <option key='desen' value='desen'>Decendente</option>
        <option key='acen' value='acen'>Acendente</option>
      </Select>
      <p></p>
      <Select defaultValue='filtro de Score' onChange={(evt) => handelScore(evt)}>
        <option disabled>Filtro de Score</option>
        <option key='menor' value='menor'>Decendente</option>
        <option key='mayor' value='mayor'>Acendente</option>
      </Select>
      <p></p>
      <Select defaultValue='filtro de Dietas' onChange={(evt) => handelDietas(evt)}>
        {dietas.map((a) => <option key={a} value={a}>{a}</option>)}
      </Select>

    </div>
  )
}

export default Ordenar