import express from 'express'
import { getGame,addGame,deleteGame } from './controllers/gameController.js'
import { gameModel } from './models/gameModel.js'
import { addSentences } from './controllers/sentenceController.js'
import { sentenceModel } from './models/sentenceModel.js'
const router = express.Router()

router.route("/games").get(getGame(gameModel));
router.route("/games/add").post(addGame(gameModel));
router.route("/games/delete/:id").delete(deleteGame(gameModel));
router.route("/sentences/add").post(addSentences(sentenceModel));

export default router;
