import express from 'express'
import mongoose from 'mongoose'
import { MovieSchema } from '../schemas/movies'
import URL from './urls.json'

mongoose.connect(URL.DATA_BASE)

const app = express()
app.use(express.json())

const ROUTES = URL.ROUTES

app.get(ROUTES.BASE, (req, res) => {
    res.send('Hello World')
})

app.post(ROUTES.MOVIES, async (req, res) => {
    try {
        const Movie = mongoose.model('Movie', MovieSchema)
        await Movie.create(req.body)
    } catch (error) {
        res.status(400).send(error)

        return
    }

    return res.status(201).send('movie created!')
})

app.post(ROUTES.CATEGORIES, (req, res) => {
    try {
        // const categories = client.db('main').collection('categories')
        // categories.insertOne(req.body)
    } catch (error) {
        res.status(400).send(error)

        return
    }

    return res.status(201).send('category created!')
})