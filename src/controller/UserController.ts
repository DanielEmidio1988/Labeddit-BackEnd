import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../database/UserDatabase";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";
import { UserDB } from "../types";

export class UserController{
    constructor(
        private userBusiness: UserBusiness,
        private userDTO: UserDTO,
    ){}
    public getAllUsers = async (req:Request, res: Response)=>{
        try {
            
            const input ={
                q:req.query.q as string,
                token: req.headers.authorization as string
            }           

            const output = await this.userBusiness.getAllUsers(input)
            
            res.status(201).send(output)
            
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public signUp = async(req: Request, res: Response)=>{
        try {
            const {username, email, password} = req.body
            
            const input = this.userDTO.signUp(username,email,password)

            const output = await this.userBusiness.signUp(input)

            res.status(201).send(output)
                    
            } catch (error) {
                    console.log(error)
                
                    if (req.statusCode === 200) {
                        res.status(500)
                    }
            
                    if (error instanceof Error) {
                        res.send(error.message)
                    } else {
                        res.send("Erro inesperado")
                    }     
                }
    }

    public login = async(req: Request, res: Response)=>{
        try {

            const {email, password} = req.body
            
            const input = this.userDTO.login(email,password)
            const output = await this.userBusiness.login(input)
 
            res.status(201).send(output)
            
        } catch (error) {
            console.log(error)
        
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }  
        }
    }

}