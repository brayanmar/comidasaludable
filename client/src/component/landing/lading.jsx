import React from 'react'
import Home from '../home/home'
import { ButtonLading } from '../styles/Style'
import { DivLading } from './ladin'
import { useNavigate } from 'react-router-dom';

function Lading() {
  const history = useNavigate()
  let hadelhome = (ev) => {
    ev.preventDefault()
    history('/home')
  }

  return (

    <DivLading>
      {<div>
        <ButtonLading type='submit' onClick={ev => hadelhome(ev)}>HOME</ButtonLading>
      </div>}
    </DivLading>
  )
}

export default Lading

