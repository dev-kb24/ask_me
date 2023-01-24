 export const addSentences = (Sentence) => {
    return async (req,res) => {
        try {
            const sentence = new Sentence({
                modalities:req.body.modalities,
                game:req.body.game
            });
            await sentence.save();
            Sentence.findById(req.body.game).populate('games').exec( (err,sentence) => {
                if(!err){
                    res.status(201).send({success:true,data:sentence})
                }else{
                    res.status(400).send({success:false,error:err});
                }
            })
           
        } catch (err) {
            res.status(400).send({success:false,error:err});
        }
    }
 }