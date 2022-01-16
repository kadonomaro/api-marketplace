import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use("/api", router);

async function start() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () =>
            console.log("Server has been started on port: " + PORT)
        );
    } catch (e) {
        console.log(e);
    }
}

start();
