export const phraseController = (Phrase) => {
    return async (req, res) => {
        try {
            const phrases = await Phrase.find();
            const randomIndex = Math.floor(Math.random() * phrases.length)
            const randomPhrase = phrases[randomIndex].phrase
            res.send(randomPhrase)
        } catch (err) {
            console.log(err);
        }
    }
}