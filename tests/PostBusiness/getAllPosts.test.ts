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

    test("Deve listar todos os posts", async()=>{
        const input = {q:'', token: 'token-mock-normal'}
        const output=         {
                id: 'p001',
                content: 'publicacao1',
                comments: 0,
                likes: 1,
                dislikes: 1,
                created_at: expect.any(String),
                updated_at: expect.any(String),
                creator: {
                    id: 'id-mock',
                    username: 'Normal Mock'
                }
            }

        const response = await postBusiness.getPosts(input)

        expect(response).toHaveLength(2)  
        expect(response).toContainEqual(output)

    })

    test("Deve retornar um erro caso não tenha informado um Token válido", ()=>{
        const input = {q: '', token: 'token-mock'}

        expect(async()=>{
            await postBusiness.getPosts(input)
        }).rejects.toThrow("'Token' não válido!")
    })
})