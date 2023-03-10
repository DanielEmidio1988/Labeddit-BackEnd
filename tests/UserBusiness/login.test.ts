import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    
    test("login bem-sucedido em conta normal retorna token", async () => {
        const input: LoginDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.token).toBe("token-mock-normal")
    })

    test("Deve retornar um erro caso o login seja incorreto (1)", ()=>{
        const input: LoginDTO = {
            email: "@email.com",
            password: "bananinha"
        }

        expect(async()=>{
            await userBusiness.login(input)
        }).rejects.toThrow("'E-mail' não cadastrado!")
    })

    test("Deve retornar um erro caso o login seja incorreto (2)", ()=>{
        const input: LoginDTO = {
            email: "normal@email.com",
            password: "bananinh"
        }

        expect(async()=>{
            await userBusiness.login(input)
        }).rejects.toThrow("'e-mail' ou 'senha' inválidos")
    })
})