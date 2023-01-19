import express from 'express'
import { phraseController } from './controllers/phraseController.js'
import { phraseModel } from './models/phraseModel.js'
const router = express.Router()

router.route("/phrases").get(phraseController(phraseModel));


export default router;
