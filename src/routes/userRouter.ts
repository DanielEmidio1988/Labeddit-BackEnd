import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { UserDTO } from "../dtos/UserDTO";
import { TokenManager } from "../services/TokenManager";
import { HashManager } from "../services/HashManager";

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new TokenManager(),
        new HashManager()), 
    new UserDTO)

//Daniel: endpoint para buscar todos os clientes cadastrados (rota teste)
userRouter.get("/", userController.getAllUsers)

//Daniel: endpoint para cadastro de novos 
userRouter.post("/signup", userController.signUp)

//Daniel: endpoint para login de usuário
userRouter.post("/login", userController.login)
