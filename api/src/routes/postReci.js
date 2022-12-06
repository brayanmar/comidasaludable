const express = require('express');
const router = express.Router();
const controller = require('./postControRecipe')



router.post('/', async (req, res) => {
    let { name, summary, healthscore, steps,imagen, diets } = req.body;
    try {
        if (!name) return res.status(400).send({ error: 'Debe ingresar el name para la receta' });
        if (!summary) return res.status(400).send({ error: 'Debe ingresar un summary del receta' });
        controller.postRecipe(name, summary, healthscore, steps,imagen, diets);
        res.status(200).send('usuario creado');
    } catch (error) {
        res.status(400).json({ "error": `${error}` })
    }
})
module.exports = router;