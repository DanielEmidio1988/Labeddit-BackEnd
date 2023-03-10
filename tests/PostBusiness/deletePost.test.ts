import {PostBusiness} from '../../src/business/PostBusiness'
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { PostDatabaseMock } from '../mocks/PostDatabaseMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { UpdateInputDTO } from '../../src/dtos/PostDTO'

describe("GetPostById",()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
    )

    test("Deve retornar verdadeiro caso consiga excluir", async ()=>{
        const input = {id:'p001', token: 'token-mock-admin'}

       const response = await postBusiness.deletePost(input)

       expect(response).not.toBe(input)
    })


    test("Deve retornar um erro caso não encontre um 'id' válido", ()=>{
        const input = {id:'p000', token: 'token-mock-normal'}

        expect(async()=>{
            await postBusiness.deletePost(input)
        }).rejects.toThrow("Publicação não encontrada")
    })

    test("Deve retornar um erro caso não tenha informado um Token válido", ()=>{
        const input = {id:'p001', token: 'token-mock'}

        expect(async()=>{
            await postBusiness.deletePost(input)
        }).rejects.toThrow("'Token' não válido!")
    })
})