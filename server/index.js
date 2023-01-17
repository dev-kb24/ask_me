import express from 'express'
import mongoose from 'mongoose'
import { phraseController } from './controllers/phraseController'
const app = express()
const port = 3000
const router = express.Router()

mongoose.connect('mongodb://localhost:27017/askme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const phraseSchema = new mongoose.Schema({
    phrase: {
        type: String,
        required: true
    }
});
const Phrase = mongoose.model('Phrase', phraseSchema);

router.get('/', phraseController(Phrase))
app.use('/phrases', router)

app.listen(port, () => {
  console.log(`Phrase generator app listening at http://localhost:${port}`)
})