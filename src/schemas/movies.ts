import mongoose from 'mongoose'

export const MovieSchema = new mongoose.Schema({ // определяем схему
    title: String,
    year: Number,
    rating: Number,
})