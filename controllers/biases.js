import BiasSentace from "../models/biasSentance.js"

export const getBiases = async (req, res) =>  { 
    try {
        const biaseSentances = await BiasSentace.find()
        res.status(200).json(biaseSentances)
    }
    catch (error) {
        res.status(404).json({message : error.message})
    }
}
export const createBias =  async (req, res) => {
    const post = req.body;
    const newBias = new BiasSentace(post)
    try {
        await newBias.save()
        res.status(201).json(newBias)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}