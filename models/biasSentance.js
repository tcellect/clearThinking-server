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

const BiasSentace = mongoose.model("biasSentace", postSchema);

export default BiasSentace;