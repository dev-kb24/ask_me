import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
import router from './router.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import { configApi } from './config.js';
const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/ask_me', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

app.use(cors(configApi))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(port, () => {
  console.log(`Phrase generator app listening at http://localhost:${port}`)
})