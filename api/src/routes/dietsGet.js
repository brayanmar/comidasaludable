const express = require('express');
const router = express.Router();
let { Diet } = require('../db');

router.get('/', async (req, res) => {
    try {
        let Todiet = await Diet.findAll();

        res.status(200).json(Todiet);

    } catch (e) {
        res.status(401).json({ "error": `${e}` })
    }
})

module.exports = router;
