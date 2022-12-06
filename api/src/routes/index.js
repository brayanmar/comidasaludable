const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const diet = require('./dietsGet.js');
const recipe = require('./getRecipe');
const recipes = require('./postReci')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', diet);
router.use('/recipe', recipe);
router.use('/recipes', recipes);
module.exports = router;
