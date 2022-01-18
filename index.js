import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();

import { articlesRouter } from "./src/routes/ArticlesRoutes.js";
import { productsRouter } from "./src/routes/ProductsRoutes.js";
import { reviewsRouter } from "./src/routes/ReviewsRoutes.js";
import { pagesRouter } from "./src/routes/PagesRoutes.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));

app.use("/api", articlesRouter);
app.use("/api", productsRouter);
app.use("/api", reviewsRouter);
app.use("/api", pagesRouter);

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
