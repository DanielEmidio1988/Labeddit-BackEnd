import { BaseDatabase } from "../../src/database/BaseDatabase"
import { UserDB, ROLE_USER } from "../../src/types"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "users"

    public getAllUsers = async (): Promise<UserDB[]>  => {
        return [
            {
                id: "id-mock",
                username: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",
                created_at: new Date().toISOString(),
                role: ROLE_USER.NORMAL
            },
            {
                id: "id-mock",
                username: "Admin Mock",
                email: "admin@email.com",
                password: "hash-bananinha",
                created_at: new Date().toISOString(),
                role: ROLE_USER.ADMIN
            }
        ]
    }

    public async signUp(newUser:UserDB){

    }

    public insert = async (userDB: UserDB): Promise<void> => {
        // Daniel: não há retorno pois é void.
    }

    public getUserByEmail = async (email: string): Promise<UserDB | undefined>  => {
        switch (email) {
            case "normal@email.com":
                return {
                    id: "id-mock",
                    username: "Normal Mock",
                    email: "normal@email.com",
                    password: "hash-bananinha",
                    created_at: expect.any(String),
                    role: ROLE_USER.NORMAL
                }
            case "admin@email.com":
                return {
                    id: "id-mock",
                    username: "Admin Mock",
                    email: "admin@email.com",
                    password: "hash-bananinha",
                    created_at: expect.any(String),
                    role: ROLE_USER.ADMIN
                }
            default:
                return undefined
        }
    }

    public getUserById = async (id: string):Promise<UserDB | undefined> =>{
        switch (id) {
            case "id-mock":
                return {
                    id: "id-mock",
                    username: "Normal Mock",
                    email: "normal@email.com",
                    password: "hash-bananinha",
                    created_at: expect.any(String),
                    role: ROLE_USER.NORMAL
                }
            case "admin@email.com":
                return {
                    id: "id-mock",
                    username: "Admin Mock",
                    email: "admin@email.com",
                    password: "hash-bananinha",
                    created_at: expect.any(String),
                    role: ROLE_USER.ADMIN
                }
            default:
                return undefined
        }
    }

}