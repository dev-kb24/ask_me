import express from 'express'
import { phraseController } from './controllers/phraseController.js'
import { phraseModel } from './models/phraseModel.js'
const router = express.Router()

export const apiRouter = (function(){
 
    router.route("/").get(phraseController(phraseModel));
  
    return router;
 
 })();
