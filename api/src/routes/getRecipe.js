const express = require('express');
const router = express.Router();
const controller = require('./recipeControGet');

router.get('/data', async (req, res) => {
    try {
        let f = await controller.getTodosLasRecetas();
        console.log(f)
        res.status(200).json(f);
    } catch (error) {
        res.status(401).json({ "error": `${error}` })
    }
})


router.get('/', async (req, res) => {
    let { name } = req.query;
    if (name) {
        try {
            let con = await controller.getNameReceta(name);
            console.log(con)
            res.status(200).json(con)
        } catch (error) {
            res.status(401).send({ "error": `${error}` })
        }
    } else {
        try {
            let control = await controller.getTotalRecetas();
            res.status(200).json(control)
        } catch (error) {
            res.status(400).json({ "error": `${error}` })
        }
    }
});

router.get('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let parceso = parseInt(id); // como el numero tiene typeoff de string realizamos un parseo a int
        let r = await controller.getIdReceta(parceso);
        res.status(200).json(r)
    } catch (error) {
        res.status(401).json({ "error": `${error}` })
    }
})



module.exports = router;