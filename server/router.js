import express from 'express'
import { getPhrase,addPhrase,deletePhrase } from './controllers/phraseController.js'
import { phraseModel } from './models/phraseModel.js'
const router = express.Router()

router.route("/phrases").get(getPhrase(phraseModel));
router.route("/phrases/add").post(addPhrase(phraseModel));
router.route("/phrases/delete/:id").delete(deletePhrase(phraseModel));


export default router;
