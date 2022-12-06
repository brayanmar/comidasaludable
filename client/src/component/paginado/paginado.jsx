import React from 'react';

import { Divpg, ButtonPg } from './pgstyle'
function Paginado(props) {
  //console.log(props.recetas)

  let numeroPaginas = [];
  for (let i = 0; i < (props.recetas.length / props.pg); i++) {
    numeroPaginas.push(i + 1);
  }
  return (
    <Divpg>
      {numeroPaginas.map(a => (<ButtonPg key={a} onClick={() => props.Page(a)}>{a}</ButtonPg>))}
    </Divpg>
  )
}

export default Paginado