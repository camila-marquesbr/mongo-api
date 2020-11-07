const express = require('express');
const router = express.Router();
const controller = require('../controllers/games-controller')

router.get('/games', controller.getGames)

router.post('/games', controller.addGames)

router.get('/games/:id', controller.getGamesById)

router.put('/games/:id', controller.updateGames)

router.delete('/games/:id', controller.deleteGames)

module.exports = router;