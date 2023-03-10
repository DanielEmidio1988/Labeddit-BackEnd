import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRouter';

dotenv.config()

//Daniel: invocando a função express() dentro da variável app
const app = express();
const local = process.env.PORT

app.use(express.json())
app.use(cors())

app.listen(local,()=>{ 
    console.log(`Servidor iniciado na porta ${local}`)})

app.use("/posts", postRouter)
app.use("/users", userRouter)