const initializeDatabase = require( "./db/db.connection.js")
const express = require('express')
const app = express()
const cors = require('cors')

const Movie = require('./models/movie.models.js')

app.use(cors())
app.use(express.json())

initializeDatabase()

app.get('/', (req, res) => {
    res.send('Welcome to Movie Server')
})

app.get('/movies', async (req, res) => {
    try{
        const movies = await Movie.find()
        if(movies){
            res.json(movies)
        }
    }
    catch(error){
        res.status(500).json({error: 'Internal Server error'})
    }
})

app.post('/movies', async (req, res) => {
    const {title, director, genre, posterUrl} = req.body
    try{
        const movieData = new Movie({title, director, genre, posterUrl})
        await movieData.save()
        res.status(200).json(movieData)
    }
    catch(error){
        res.status(500).json({error: 'Internal Server error'})
    }
})

app.delete('/movies/:movieId', async (req, res) => {
    try{
        const movieToDelete = await Movie.findByIdAndDelete(req.params.movieId)

        if (!movieToDelete) {
            return res.status(404).json({ error: "Movie not found" });
          }
      
          res.status(200).json({
            message: "Movie deleted successfully",
            movie: movieToDelete,
          });
    }
    catch(error){
        res.status(500).json({error: 'Internal Server error'})
    }
})

app.put('/movies/:movieId', async (req, res) => {
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true})
        if (!updatedMovie) {
            return res.status(404).json({ error: "Movie not found" });
          }
      
          res.status(200).json(updatedMovie);
    }
    catch(error){
        res.status(500).json({error: 'Internal Server error'})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

