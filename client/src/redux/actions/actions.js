import { GET_PRODUCTOS, TYPE_DIETA, FILTRO_POR_ORDEN_ALFABETICO, FILTRO_POR_ORDEN_SCORE, FILTRO_POR_ORDEN_DIETA, FILTRO_POR_INPUT, FILTER_BY_SEARCHBAR } from './typeaction';
import axios from 'axios';
// se trae todas las recetas
export const getRecetas = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/recipe').then(res => res.json())
            .then((json) => {
                dispatch({
                    type: GET_PRODUCTOS,
                    payload: json
                })
            })
    }
};
//se trae las dietas
export const getDieta = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3001/types')
            .then((json) => {
                dispatch({
                    type: TYPE_DIETA,
                    payload: json
                })
            })
    }
};
// seccion de filtros
//FILTRO ORDENAR 
export const get_filterOrdenAlfabetico = (ordenAlfabetico) => {
    //console.log(ordenAlfabetico)
    return {
        type: FILTRO_POR_ORDEN_ALFABETICO,
        payload: ordenAlfabetico
    }
};
// FILTRO DE SCORE
export const get_filterOrdenScore = (ordenarScore) => {
    return {
        type: FILTRO_POR_ORDEN_SCORE,
        payload: ordenarScore
    }
};
//FILTRO POR TIPO DE DIETA
export const get_filterOrdenDieta = (dieta) => {
    return {
        type: FILTRO_POR_ORDEN_DIETA,
        payload: dieta
    }
};
// FILTRO POR INPUT
export const get_filterInput = (input) => {
    return {
        type: FILTRO_POR_INPUT,
        payload: input
    }
};
//SE EJECUTA CON EL BUTTON
export function searchBarName(nombre) {
    return async function (dispatch) {
        const recipes = await axios.get(`http://localhost:3001/recipe?name=${nombre}`)
        return dispatch({
            type: FILTER_BY_SEARCHBAR,
            payload: recipes.data
        })
    }
};
// ENVIAR LA RECETA POR BODY
export const postRecipes = (mensaje) => {
    return async function () {
        const respuesta = await axios.post(`http://localhost:3001/recipes`, mensaje)
        //console.log(respuesta)
        return respuesta;
    }
};

