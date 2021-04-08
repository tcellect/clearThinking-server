import BiasSentance from "../models/biasSentance.js"

//
// TODO: find a way to assess biases (the simplest ones) in received text and save it with flags for future rendering
//

// find every imperative statement in a text
// example: should, must
// then put it between <b></b>
// TODO: find out if the whole sentace is imperative or not
// TODO: find out a way to include all possible words and combinations in a samplespace

const samplesImperative = ["should", "ought-to", "must", "shall", "will", "have to", "have got to", "need to", "be obliged to", "be compelled to"]

const findBiasShouldStatements = (text) => {
    let formatedString = ""
    const prep = text.biasText.split(/(\s+)/)
    for (let i = 0; i < prep.length; i++){
        if (samplesImperative.includes(prep[i])) {
            formatedString += `<b>${prep[i]}</b>`;
            continue
        }
        formatedString += prep[i];
    }
    return {...text, biasText: formatedString }
}

// find every negative label in a text
// example: foolish, stupid, bad, idiot
// then put it between <b></b> 
const findBiasLabeling = (text) => {

}

// find every generalization in a text
// example: everytime, always, never, all, none, everybody
// then put it between <b></b> 
const findBiasAllOrNothing = (text) => {

}

export const getBiases = async (req, res) =>  { 
    try {
        const biaseSentances = await BiasSentance.find()
        res.status(200).json(biaseSentances)
    }
    catch (error) {
        res.status(404).json({message : error.message})
    }
}
export const createBias =  async (req, res) => {
    const post = findBiasShouldStatements(req.body);
    const newBias = new BiasSentance(post)
    console.log("server got this", newBias)
    try {
        await newBias.save()
        res.status(201).json(newBias)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}