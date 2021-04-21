import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
    {
        ticketId: String,
        userId: String,
        situation: String,
        feelings: { },
        intensityOfFeelingsIn: Number,
        behaviour: String,
        thought: String,
        biases: { },
        balancedThought: String,
        intensityOfFeelingsOut: Number,
    },
    { timestamps: true }
);

export default mongoose.model("ticket", ticketSchema);
