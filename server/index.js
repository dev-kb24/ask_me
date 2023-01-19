import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/askme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

app.use(cors({
      origin: '*',
    
      methods: [
        'GET',
        'POST',
      ],
    
      allowedHeaders: [
        'Content-Type',
      ],
    }))
app.use('/api', router)

app.listen(port, () => {
  console.log(`Phrase generator app listening at http://localhost:${port}`)
})