import { TokenPayload, ROLE_USER } from "../../src/types"

export class TokenManagerMock {

    public createToken = (payload: TokenPayload): string => {
        if (payload.role == ROLE_USER.NORMAL) {
            return "token-mock-normal"
        } else {
            return "token-mock-normal"
        }
    }

    public getPayload = (token: string): TokenPayload | null => {
        if (token == "token-mock-normal") {
            return {
                id: "id-mock",
                username: "name-mock",
                role: ROLE_USER.NORMAL
            }
            
        } else if (token == "token-mock-admin") {
            return {
                id: "id-mock",
                username: "name-mock",
                role: ROLE_USER.ADMIN
            }

        } else {
            return null
        }
    }
}