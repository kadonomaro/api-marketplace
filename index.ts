import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();
import { router } from "./src/routes";

const PORT = process.env.PORT || 8000;
const app = express();
const URL = process.env.DB_URL || "";

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(express.static("static"));
app.use(fileUpload({}));

async function start(): Promise<void> {
    const options: object = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };
    try {
        await connect(URL, options);
        app.listen(PORT, () => console.log("Server has been started on port: " + PORT));
    } catch (e) {
        console.log(e);
    }
}

start();
