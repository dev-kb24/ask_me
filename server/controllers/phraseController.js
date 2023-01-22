
export const getPhrase = (model) => {
    return async (req, res,next) => {
        try {
            const phrases = await model.find()
            res.status(200).send({success:true,data:phrases});
        } catch (err) {
            res.status(400).send({success:false,error:err});
        }
    }
}

export const addPhrase = (model) => {
    return async (req,res) => {
        await model.create({
            phrase:req.body.phrase
        }, function (err, doc) {
            if (err) {
                res.status(400).send({success:false,err:err})
            } else {
                console.log(doc);
               res.status(201).send({success:true,data:doc});
            }
        });
    }  
} 

export const deletePhrase = (model) => {
    return async (req,res) => {
        model.findByIdAndRemove(req.params.id, (err,phrase) => {
            if (err) return res.status(500).send(err)
            const message = {
                success:true,
                id:phrase._id
            }
            return res.status(200).send(message);
        })
    }
}

