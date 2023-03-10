import { PostDB } from "../types"
// import { db } from "../database/Knex"
import { Request,Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostDTO } from "../dtos/PostDTO"


export class PostController{
    constructor(
        private postBusiness: PostBusiness,
        private postDTO: PostDTO
    ){}

    public getPosts = async(req:Request, res:Response)=>{
        try {

            const input ={
                q:req.query.q as string,
                token: req.headers.authorization as string
            }  
            

            const output = await this.postBusiness.getPosts(input)

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

    public getPostsbyId = async(req:Request, res:Response)=>{
        try {

            const input ={
                id:req.params.id as string,
                token: req.headers.authorization as string
            }  
            

            const output = await this.postBusiness.getPostsById(input)

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

    public insertNewPost = async(req:Request, res:Response)=>{
        try {
                
        const content = req.body.content
        const token = req.headers.authorization as string

            const input = this.postDTO.insertInputPost(content, token)

            const output = await this.postBusiness.insertNewPost(input)
            
            res.status(200).send(output)
    
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

    public insertNewComment = async(req:Request, res:Response)=>{
        try {

        const id = req.params.id        
        const content = req.body.content
        const token = req.headers.authorization as string

            const input = this.postDTO.InsertInputComment(id, content, token)

            const output = await this.postBusiness.insertNewComment(input)
            
            res.status(200).send(output)
    
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

    public updatePost = async (req:Request, res: Response)=>{
        try {
            
        const id = req.params.id
        const content = req.body.content
        const token = req.headers.authorization as string

        const input = await this.postDTO.updateInputPost(id,content, token)

        const output = await this.postBusiness.updatePost(input)

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

    public deletePost = async (req:Request, res: Response)=>{
        try {

            const id = req.params.id
            const token = req.headers.authorization as string

            const input = await this.postDTO.deleteInputPost(id, token)

            const output = await this.postBusiness.deletePost(input)

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

    public likeDislike = async (req:Request, res: Response)=>{
        try {

            const input = {
                id: req.params.id,
                like: req.body.like,
                token: req.headers.authorization as string,
            }

            const output = await this.postBusiness.likeDislike(input)

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