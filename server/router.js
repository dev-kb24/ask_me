import express from 'express'
import { getGame,addGame,deleteGame } from './controllers/gameController.js'
import { gameModel } from './models/gameModel.js'
import { addSentences } from './controllers/sentenceController.js'
import { sentenceModel } from './models/sentenceModel.js'
import { login,createAccount } from './controllers/loginController.js'
import { userModel } from './models/userModel.js'
const router = express.Router()

router.route("/games").get(getGame(gameModel));
router.route("/games/add").post(addGame(gameModel));
router.route("/games/delete/:id").delete(deleteGame(gameModel));
router.route("/sentences/add").post(addSentences(sentenceModel));
router.route("/login").post(login(userModel));
router.route('/createAccount').post(createAccount(userModel));

export default router;
