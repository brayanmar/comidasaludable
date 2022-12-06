let { Recipe, Diet } = require('../db');
const axios = require('axios');
require('dotenv').config();
const { YOUR_API_KEY, LINK } = process.env;



module.exports = {
    //si no le pasa parametros, retornar todas las recetas, con las dietas icluidas
    //resetas de DB 

    getTodosLasRecetas: async function () {
        let infoDB = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        //console.log(infoDB)
        let response = await infoDB?.map(recipe => {
            return {
                id: recipe.id,
                name: recipe.name,
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                steps: recipe.steps,
                imagen:recipe.imagen,
                diets: recipe.diets?.map(diet => diet.name),
            }
        });
        return response;
    },
   
    getTodasLasRecetasApi: async function () {
        /*let a = await axios.get(`${LINK}/recipes/complexSearch?apiKey=${YOUR_API_KEY}&number=60&addRecipeInformation=true`).then(res => res.data.results);*/
        let a = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5?fbclid=IwAR1P3W928d7NmUSEzIxATew5T2GzuTW44_kywpLEH02JlKnkXMffPjhadj0`).then(res => res.data.results);
        if (a.length > 0) {
            let response = await a?.map((result) => {
                return {
                    id: result.id,
                    name: result.title,
                    summary: result.summary,
                    healthScore: result.healthScore,
                    diets: result.diets?.map(r => r),
                    imagen: result.image,
                    steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps ? result.analyzedInstructions[0].steps.map(item => item.step).join(" \n") : '')
                }
            });
            return response
        }

    },
    //concatenacion de DB y api de las recetas
    getTotalRecetas: async function () {
        let db = await this.getTodasLasRecetasApi();
        let api = await this.getTodosLasRecetas();
        let dbapi = api.concat(db);
        if (dbapi.length < 1) throw new Error('no existe inventario de recetas');
        return dbapi;
    },
    // si le pasan parametros retorna todas la recetas incluido las dietas que se relacionen
    // recetas de la DB
    getNameReceta: async function (nam) {

        let fin = await this.getTotalRecetas();
        let y = fin.filter(a => {
            let minus = a.name.toLowerCase();
            return minus.includes(nam)
        })
        if (y.length < 1) throw new Error(`la receta buscada ${nam} no se encontro`);
        return y

    },
    //se busca por el id 
    getIdReceta: async function (id) {
        //console.log(typeof (id))
        //console.log(id)
        let rec = await this.getTotalRecetas();
        let t = rec.find(a => a.id === id);
        if (!t) throw new Error(`la receta por el ${id} buscada no se encontro`);
        return t
    }

};