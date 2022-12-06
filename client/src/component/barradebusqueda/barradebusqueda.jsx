import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../styles/Style';
//ACCIONES
import { get_filterInput, searchBarName } from '../../redux/actions/actions';

function Barradebusqueda() {
    const [inf, setinf] = useState('')
    const dispatch = useDispatch();
   
    const handelInput = (nomb) => {
        nomb.preventDefault();
        dispatch(get_filterInput(nomb.target.value))
        setinf(`${nomb.target.value}`)
    };
    const handelSumit = (sumi) => {
        sumi.preventDefault();
        if (inf) {
            dispatch(searchBarName(inf));
            setinf('')   // poner el estado en cero otra  vez
        }
    };

    return (
        <div>
            <Input type="text" placeholder="Search Recipe..." onChange={evt => handelInput(evt)} />
            <Button type="submit" onClick={evt => handelSumit(evt)}>Buscar</Button>
        </div>
    )
}

export default Barradebusqueda