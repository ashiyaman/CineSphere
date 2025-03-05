const  {initializeDatabase} = require( "./db/db.connection.js")
const express = require('express')
const app = express()

const Movie = require('./models/movie.models.js')

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
        res.status(500).json({error: 'Internal Server error.'})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

