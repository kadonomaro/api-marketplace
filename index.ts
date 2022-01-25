import express from "express";
import { connect } from "mongoose";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();

import { articlesRouter } from "./src/routes/ArticlesRoutes";
import { productsRouter } from "./src/routes/ProductsRoutes";
import { reviewsRouter } from "./src/routes/ReviewsRoutes";
import { pagesRouter } from "./src/routes/PagesRoutes";

const PORT = process.env.PORT || 8000;
const app = express();
const URL = process.env.DB_URL || "";

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));

app.use("/api", articlesRouter);
app.use("/api", productsRouter);
app.use("/api", reviewsRouter);
app.use("/api", pagesRouter);

async function start(): Promise<void> {
    const options: object = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };
    try {
        await connect(URL, options);
        app.listen(PORT, () =>
            console.log("Server has been started on port: " + PORT)
        );
    } catch (e) {
        console.log(e);
    }
}

start();
