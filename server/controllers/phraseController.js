export const phraseController = (Phrase) => {
    return async (req, res,next) => {
        try {
            const phrases = await Phrase.find();
            res.json(phrases);
        } catch (err) {
            console.log(err);
        }
    }
}