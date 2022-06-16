import express, {json} from "express";
import cors from "cors";
import 'express-async-errors'
import {handleError, ValidationError} from "./utils/errors/errors";

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(json())


//Routes

app.get('/', async (req, res) => {
    throw new ValidationError('tessssst')
})

app.use(handleError);
const port = 3001
app.listen(port, '0.0.0.0', () => {
    console.log(`listening on http://localhost:${port}`)
})

