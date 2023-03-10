import {PostBusiness} from '../../src/business/PostBusiness'
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { PostDatabaseMock } from '../mocks/PostDatabaseMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { InsertInputCommentDTO } from '../../src/dtos/PostDTO'

describe("GetPostById",()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
    )

    test("Deve criar um comentário", async()=>{
        const input:InsertInputCommentDTO = {id_post: 'p001',token: 'token-mock-normal', content:'teste'}
        
        const response = await postBusiness.insertNewComment(input)

        expect(response).toBeTruthy()    
    })

    test("Deve retornar um erro com 'token' inválido", ()=>{
        const input = {id_post: 'p001',token: 'token-mock', content:'teste'}
        
        expect(async()=>{
            await postBusiness.insertNewComment(input)
        }).rejects.toThrow("'Token' não válido!")
    })

    test("Deve retornar um erro com 'post' não localizado", ()=>{
        const input = {id_post: 'p000',token: 'token-mock-normal', content:'teste'}
        
        expect(async()=>{
            await postBusiness.insertNewComment(input)
        }).rejects.toThrow("'Post' não localizado")
    })

})