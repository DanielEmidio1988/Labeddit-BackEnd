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

    test("Deve listar todos um post pelo comentário", async()=>{
        const input = {id: 'p001', token: 'token-mock-normal'}
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
                },
                comments_post:[{
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
            }

        const response = await postBusiness.getPostsById(input)
 
        expect(response).toContainEqual(output)
    })

    
    test("Deve retornar um erro com Id Post incorreto", ()=>{
        const input = {id: 'p000', token: 'token-mock-normal'}
        
        expect(async()=>{
            await postBusiness.getPostsById(input)
        }).rejects.toThrow("'Post' não localizado")
    })

    test("Deve retornar um erro com 'token' inválido", ()=>{
        const input = {id: 'p001', token: 'token-mock'}
        
        expect(async()=>{
            await postBusiness.getPostsById(input)
        }).rejects.toThrow("'Token' não válido!")
    })

})