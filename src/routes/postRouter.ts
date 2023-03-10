import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { PostDTO } from "../dtos/PostDTO";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export const postRouter = express.Router()

const postController = new PostController(

    new PostBusiness(
        new PostDatabase(),
        new UserDatabase(),
        new IdGenerator(),
        new TokenManager()      
    ),
    new PostDTO())

//Daniel: endpoint para buscar todos os posts
postRouter.get("/", postController.getPosts)

//Daniel: endpoint para buscar um post por ID
postRouter.get("/:id", postController.getPostsbyId)

//Daniel: endpoint para inserir novo post
postRouter.post("/", postController.insertNewPost)

//Daniel: endpoint para inserir novo comentário
postRouter.post("/:id", postController.insertNewComment)

//Daniel: endpoint para atualizar um post
postRouter.put("/:id", postController.updatePost)

//Daniel: endpoint para deletar post
postRouter.delete("/:id", postController.deletePost)

//Daniel: endpoint like/dislike
postRouter.put("/:id/like", postController.likeDislike)