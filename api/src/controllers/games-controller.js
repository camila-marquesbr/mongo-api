const model = require('../models/gamesSchema')

const getGames =  (req,res) => {
   console.log(req.url)
   model.gameCollection.find((error,game)=>{
       if(error){
           return res.status(500).send(error)
       }else{
           return res.status(200).send(game)
       }
   })
}


const getGameById =  (req,res) => {
    const idParam = req.params.id
    model.gameCollection.findById(idParam, (error, game) =>{
        if(error){
            return res.status(500).send(error)
        }else{
            if(games){
                return res.status(200).send(game)
            }else{
                return res.status(404).send("Game não encontrado")
            }
        }
    })
}


const addGame = (req,res) => {

   console.log(req.url)
   const gameBody = req.body
   const game = new model.gameColletion(gameBody)
   game.save((error)=>{
       if(error){
           return res.status(400).send(error)
       }else{
           return res.status(201).send(game)
       }
   })
}


const updateGame = (req, res) => {
    const idParam = req.params.id
    const gameBody = req.body
    const novo = {new: true}
    model.gameCollection.findByIdAndUpdate(
        idParam,
        {$set:{gameBody}},
        novo,
        (error, game)=>{
            if(error){
                return res.status(500).send(error)
            }else if (game){
                return res.status(200).send(game)
            }else{
                return res.sendStatus(400)
            }
        }
    )
    
}


const deleteGame = (req, res) => {
    const idParam =req.params.id
    model.gameCollection.findByIdAndDelete(idParam, (error, game)=>
    {
        if(error){
            return res.status(500).send(error)
        }else if(game){
            return res.status(200).send("O jogo foi apagada :(")
        }else {
            return res.sendStatus(404)
        }
    })
}

module.exports = {
    getGames, 
    getGameById, 
    addGame,
    updateGame, 
    deleteGame 
}