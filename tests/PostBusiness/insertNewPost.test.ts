import {PostBusiness} from '../../src/business/PostBusiness'
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { PostDatabaseMock } from '../mocks/PostDatabaseMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { InsertInputPostDTO } from '../../src/dtos/PostDTO'

describe("GetPostById",()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
    )

    test("Deve criar um post", async()=>{
        const input:InsertInputPostDTO = {token: 'token-mock-normal', content:'teste'}
        
        const response = await postBusiness.insertNewPost(input)

        expect(response).toBeTruthy()
        
    })

    test("Deve retornar um erro com 'token' inválido", ()=>{
        const input = {token: 'token-mock', content:'teste'}
        
        expect(async()=>{
            await postBusiness.insertNewPost(input)
        }).rejects.toThrow("'Token' não válido!")
    })
})