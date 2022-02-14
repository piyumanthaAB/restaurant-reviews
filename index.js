import app from "./server.js";
import mongodb from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000
const connectionURI = process.env.DB_CONNECION.replace('<PASSWORD>',process.env.DB_PSW);


MongoClient.connect(
    connectionURI, {
        wtimeoutMS: 2500
    }
).catch(err => {
    console.log(err.stack);
    process.exit(1)
}).then(async client => {
    app.listen(port, () => {
        console.log(`\n\n============= Server is Listening on PORT : ${port} =================\n\n`);
    })
})






