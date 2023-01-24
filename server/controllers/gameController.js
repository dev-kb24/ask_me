
export const getGame = (Game) => {
    return async (req, res,next) => {
        try {
            const game = await Game.find()
            res.status(200).send({success:true,data:game});
        } catch (err) {
            res.status(400).send({success:false,error:err});
        }
    }
}

export const addGame = (Game) => {
    return async (req,res) => {
        try {
            const game = new Game({
                title: req.body.title,
                type: req.body.type,
                created_at: Date.now(),
                updated_at: Date.now(),
                participants:[]
            })
            const doc = await game.save();
            res.status(201).send({success:true,data:doc});
        } catch (err) {
            res.status(400).send({success:false,error:err});
        }
    }  
} 

export const deleteGame = (model) => {
    return async (req,res) => {
        model.findByIdAndRemove(req.params.id, (err,game) => {
            if (err) return res.status(500).send(err)
            const message = {
                success:true,
                id:game._id
            }
            return res.status(200).send(message);
        })
    }
}

