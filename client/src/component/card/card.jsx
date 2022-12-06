import React from 'react';
import { Cardiv } from './cardstyle';

function Card({ name, summary, healtscore, steps, imagen, diet }) {

  return (
    <Cardiv>
      <h2>{name}</h2>
      <p>{summary}</p>
      <h3>{healtscore}</h3>
      <p>{steps}</p>
      <img src={imagen} alt='imagen' />
      <h3>{diet}</h3>
    </Cardiv>
  )
}

export default Card