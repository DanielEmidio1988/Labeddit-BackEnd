import { PostDB, CommentDB, LikeDislikeDB, LikeDislikeCommentDB, ROLE_USER } from "../../src/types"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDatabaseMock extends BaseDatabase{
    public static POSTS_TABLE = "posts"
    public static COMMENTS_TABLE = "comments_posts"
    public static LIKEDISLIKE_TABLE = "likes_dislikes"
    public static LIKEDISLIKECOMMENT_TABLE = "likes_dislikes_comments"

    public getAllPosts = async ():Promise<PostDB[]> => {
        return[
            {
                id: 'p001',
                creator_id: 'id-mock',
                content: 'publicacao1',
                comments: 0,
                likes: 1,
                dislikes: 1,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            },
            {
                id: 'p002',
                creator_id: 'id-mock',
                content: 'publicacao2',
                comments: 1,
                likes: 0,
                dislikes: 0,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            }
        ]
    }

    public getPostsWithCreator = async()=>{
        const postsDB = await this.getAllPosts()
        const creatorsDB = [{
            id: "id-mock",
            username: "Normal Mock",
            email: "normal@email.com",
            password: "hash-bananinha",
            created_at: expect.any(String),
            role: ROLE_USER.NORMAL
        },
        {
            id: "id-mock",
            username: "Admin Mock",
            email: "admin@email.com",
            password: "hash-bananinha",
            created_at: expect.any(String),
            role: ROLE_USER.ADMIN
        }]
        
        return{
            postsDB,
            creatorsDB,
        }
    }

    public getPostWithComments = async(id:string)=>{
        const postsDB = await this.getAllPosts()
        const creatorsDB = [{
            id: "id-mock",
            username: "Normal Mock",
            email: "normal@email.com",
            password: "hash-bananinha",
            created_at: expect.any(String),
            role: ROLE_USER.NORMAL
        },
        {
            id: "id-mock",
            username: "Admin Mock",
            email: "admin@email.com",
            password: "hash-bananinha",
            created_at: expect.any(String),
            role: ROLE_USER.ADMIN
        }]
        const commentsDB = [{
            id: 'c001',
            creator_id: 'id-mock-1',
            content: 'Comentário 1',
            likes: 0,
            dislikes: 0,
            created_at: '2023-03-08T22:07:42.277Z',
            updated_at: '2023-03-08T22:07:42.277Z',
            post_id: 'p001'
          },
          {
            id: 'c002',
            creator_id: 'id-mock-2',
            content: 'Comentário 2',
            likes: 0,
            dislikes: 0,
            created_at: '2023-03-08T22:07:42.277Z',
            updated_at: '2023-03-08T22:07:42.277Z',
            post_id: 'p001'
          }]
       
        return{
            postsDB,
            creatorsDB,
            commentsDB,
        }
    }

    public getPostById = async (id: string):Promise<PostDB | undefined>=>{
        // console.log(id)
        if(id === 'p001'){
        return{
                id: 'p001',
                creator_id: 'id-mock',
                content: 'publicacao1',
                comments: 0,
                likes: 1,
                dislikes: 1,
                created_at: expect.any(String),
                updated_at: expect.any(String),
            }
        }
    }

    //Daniel: busca um unico comentário
    public getCommentById = async (id: string):Promise<CommentDB | undefined>=>{
        if(id === 'c001'){
            return{
                    id: 'c001',
                    creator_id: 'id-mock',
                    content: 'comentario1',
                    likes: 1,
                    dislikes: 1,
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                    post_id: 'p001',
                }
            }
    }

    //Daniel: busca uma relação de comentários pelo post_id
    public getCommentsById = async(id:string):Promise<PostDB[] | undefined>=>{
        if(id === 'c001'){
            return[{
                    id:'c001',
                    creator_id: 'id-mock',
                    content: 'publicacao1',
                    comments: 0,
                    likes: 1,
                    dislikes: 1,
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                }]
            }
    }

    public getLikeDislikeByPostId = async (id:string):Promise<LikeDislikeDB[] | undefined>=>{
        return[{
            user_id: 'id-mock',
            post_id: 'p001',
            like: 1,
            }]
    }

    public getLikeDislikeByCommentId = async (id:string):Promise<LikeDislikeCommentDB[] | undefined>=>{
        return[{
            user_id: 'id-mock',
            comment_id: 'c001',
            like: 1,
        }]
    }

    public insertNewPost = async(newPostDB:PostDB):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public insertNewComment = async(newPostDB:CommentDB):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public updatePost = async(updatePost:PostDB,id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public updateComment = async(updatePost:PostDB,id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public deletePostbyId = async(id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public deleteCommentsbyId = async(id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public deleteLikeDislike = async(id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public deleteLikeDislikeComments = async(id:string):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public likeDislike = async(user_id:string, post_id: string):Promise<LikeDislikeDB | undefined>=>{
        return{
            user_id: 'id-mock',
            post_id: 'p001',
            like: 1,
        }
    }

    public updateLikeDislike = async(updateLD:LikeDislikeDB):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }

    public updateLikeDislikeComment = async(updateLD:LikeDislikeCommentDB):Promise<void>=>{
        // Daniel: não há retorno pois é void.
    }
}