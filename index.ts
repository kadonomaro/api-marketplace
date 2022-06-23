import express, { Application } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { router } from "./src/routes";
require("dotenv").config();

const PORT: string | number = process.env.PORT || 8010;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);
app.use(express.static("static"));

async function start(): Promise<void> {
    try {
        app.listen(PORT, () => console.log("Server has been started on port: " + PORT));
    } catch (e) {
        console.log(e);
    }
}

start();
