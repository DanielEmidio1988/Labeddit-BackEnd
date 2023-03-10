import {PostBusiness} from '../../src/business/PostBusiness'
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { PostDatabaseMock } from '../mocks/PostDatabaseMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'

describe("GetPostById",()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
    )

    test("Deve retornar um erro se já tiver interagido com a publicação", ()=>{
        const input = {id:'p001',like:1, token: 'token-mock-admin'}

        expect(async()=>{
            await postBusiness.likeDislike(input)
        }).rejects.toThrow('Você já interagiu com esta publicação')
    })

    test("Deve retornar um erro com 'token' inválido", ()=>{
        const input = {id:'p001',like:1, token: 'token-mock'}
        
        expect(async()=>{
            await postBusiness.likeDislike(input)
        }).rejects.toThrow("'Token' não válido!")
    })

})