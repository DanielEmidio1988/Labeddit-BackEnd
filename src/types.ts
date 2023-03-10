export enum ROLE_USER{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

//Daniel: interface para dados de usuário
export interface UserDB{
    id: string,
    username: string,
    email: string,
    password: string,
    role: ROLE_USER,
    created_at: string,
}

//Daniel: interface para dados publicação
export interface PostDB{
    id: string,
    creator_id: string,
    content: string,
    comments: number,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
}

//Daniel: interface para dados de comentário de publicação
export interface CommentDB{
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    post_id: string,
}

//Daniel: interface para dados de comentário de publicação
export interface CommentWithCreatorDB{
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    post_id: string,
    creator:{
        creator_id: string,
        username: string,
    }
}

//Daniel: interface para dados de publicação, relacionando usuário que a criou
export interface PostbyUsersDB{
    id: string,
    content: string,
    comments: number,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    creator: {
        id: string,
        username: string,
    }
}

//Daniel: interface para dados de publicação individual e seus comentários
export interface PostWithCommentsDB{
    id: string,
    content: string,
    comments: number,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string,
    creator: {
        id: string,
        username: string,
    },
    comments_post: CommentWithCreatorDB,
}

//Daniel: interface para dados da tabela de like-dislikes de publicação
export interface LikeDislikeDB{
    user_id: string,
    post_id: string,
    like: number,
}

//Daniel: interface para dados da tabela de like-dislikes de comentários
export interface LikeDislikeCommentDB{
    user_id: string,
    comment_id: string,
    like: number,
}

//Daniel: interface para dados de Token
export interface TokenPayload {
    id: string,
		username: string,
    role: ROLE_USER
}