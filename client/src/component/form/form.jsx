import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postRecipes, getDieta } from '..//..//redux/actions/actions';
import { Input, Select, Button } from '../styles/Style';
import { DivForm } from './formulario';

// VALIDA LA INFO SUMINISTRADA
function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Name is require'
    }
    if (!input.summary) {
        errors.summary = 'Summary is require'
    }
    return errors
}

function Form() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const type = useSelector((state) => state.types.data)
    const allState = useSelector((state) => state.recipes)
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        steps: '',
        imagen: '',
        diets: []
    });

    useEffect(() => { dispatch(getDieta()) }, []);
    // LA FUNCION QUE ENVIA LA INFO A LA ACCION
    async function handleSubmit(evt) {
        evt.preventDefault()
        dispatch(postRecipes(input))
        history('/home')
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        if (allState.find(recipe => recipe.name.toLowerCase() === e.target.value.toLowerCase())) {
            setError({
                ...input,
                [e.target.name]: 'Recipe is found'
            })
        }
        console.log(input)
    }

    function handleSelect(evt) {
        if (!input.diets.includes(evt.target.value)) {
            setInput({
                ...input,
                diets: [...input.diets, evt.target.value]
            })
        }
        console.log(input)
    }
    function handleNumber(evt) {
        try {
            const parsValue = parseInt(evt.target.value)
            if ((Number.isInteger(parsValue)) && (parsValue >= 0) && (parsValue <= 99)) {
                setInput({
                    ...input,
                    [evt.target.name]: parsValue
                })
            }
        } catch {
            console.log('error')
        }
        // console.log(input)
    }
    function handleDelete(evt) {
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== evt)
        })
    }

    return (
        <DivForm>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <p>CREA TU RECETA</p>
                <p></p>
                <Input
                    type="text"
                    autoComplete="off"
                    value={input.name}
                    name='name'
                    placeholder='Agregar Nombre...'
                    onChange={evt => handleChange(evt)}
                />
                <p></p>
                <p>Coloca el resumen de tu receta:</p>
                <Input
                    type="text"
                    value={input.summary}
                    name='summary'
                    placeholder='Escribe aqui el Summary...'
                    onChange={evt => handleChange(evt)}
                />
                <p></p>
                <p>El puntaje de tu receta:</p>
                <Input
                    className="controls"
                    type="number"
                    value={input.healthScore}
                    name='healthScore'
                    onChange={evt => handleNumber(evt)}
                />
                <p></p>
                <p>El paso a paso de tu receta:</p>
                <Input
                    type="text"
                    value={input.steps}
                    name='steps'
                    placeholder='Escribe aqui los Steps...'
                    onChange={evt => handleChange(evt)}
                />
                <p>Ingrese la imagen:</p>
                <p></p>
                <Input 
                  type="text"
                  value={input.imagen}
                  name='imagen'
                  placeholder='Escribe aqui la imagen...'
                  onChange={evt => handleChange(evt)}
                />
                <p>Selecciona el tipo de dieta:</p>
                <Select defaultValue='Diets' onChange={(evt) => handleSelect(evt)}>
                    <option disabled>Diets</option>
                    {type?.map((type) => <option key={type.name} value={type.id}>{type.name}</option>)}
                </Select>
                <div>
                    <p>Guarda tu receta:</p>
                    {((input.name !== '') && (!error.name) && (input.summary !== '')) ?

                        <Button type='submit'>Recipes Create</Button>
                        : input.name === '' ? <Button>Name is require</Button>
                            : <Button>Summary is require</Button>}
                </div>
                <div>
                    {input.diets.map(
                        (el, index) => <div key={index}><p>{el}</p>
                            <button onClick={() => handleDelete(el)}>X</button></div>
                    )}
                </div>
            </form>
        </DivForm>
    )
}

export default Form