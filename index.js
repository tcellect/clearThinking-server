import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import biasRouts from "./routes/biasR.js"
import dotenv from "dotenv"

const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

app.use(express.json({ limit: "1mb", extended: true}));
app.use(express.urlencoded({ limit: "1mb", extended: true}));
app.use(cors());
app.use("/bias", biasRouts)

app.get("/", (req, res) => {
    res.send("check your thinking for biases")
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set("useFindAndModify", false);