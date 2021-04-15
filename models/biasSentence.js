import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    biasText: String,
    biasOptions: [String],
    biasNormalized: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const BiasSentence = mongoose.model("biasSentace", postSchema);

export default BiasSentence;