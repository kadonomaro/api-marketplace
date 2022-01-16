const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function start() {
    try {
        app.listen(PORT, () => {
            console.log("Server has been started on port: ", PORT);
        });
    } catch (error) {
        console.error(error);
    }
}

start();
