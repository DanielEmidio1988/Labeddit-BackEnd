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



    test("Deve retornar um erro caso não encontre um 'id' válido", ()=>{
        const input:UpdateInputDTO = {id:'p000', content: 'atualizacao', token: 'token-mock-normal'}

        expect(async()=>{
            await postBusiness.updatePost(input)
        }).rejects.toThrow("'Id' não localizada")
    })

    test("Deve retornar um erro caso não tenha informado um Token válido", ()=>{
        const input:UpdateInputDTO = {id:'p001', content: 'atualizacao', token: 'token-mock'}

        expect(async()=>{
            await postBusiness.updatePost(input)
        }).rejects.toThrow("'Token' não válido!")
    })
})