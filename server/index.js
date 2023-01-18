import express from 'express'
import mongoose from 'mongoose'
import { apiRouter } from './router.js'
const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/askme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

app.use('/phrases', apiRouter)

app.listen(port, () => {
  console.log(`Phrase generator app listening at http://localhost:${port}`)
})