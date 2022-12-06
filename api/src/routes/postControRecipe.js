let { Recipe, Diet } = require('../db');

module.exports = {
    //agregar la receta y realizar el enlace de la tabla de relacion 
    postRecipe: async function (name, summary, healthscore, steps,imagen, diets) {


        let j = await Recipe.create({
            name,
            summary,
            healthscore,
            steps,
            imagen
        });
        //console.log(diets)
        await j.addDiet(diets);

    }
};