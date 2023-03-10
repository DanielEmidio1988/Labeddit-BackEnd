import { UserDB, ROLE_USER } from "../types"
export class User{
    constructor(
        private id: string,
        private username: string,
        private email: string,
        private password: string,
        private role: ROLE_USER,
        private created_at: string,
    ){}
    
    public toDBModel():UserDB{
        return{
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
            created_at: this.created_at,
        }
    }

    public getId():string{
        return this.id
    }

    public setId(value:string):void{
        this.id = value
    }

    public getName():string{
        return this.username
    }

    public setName(value:string):void{
        this.username = value
    }

    public getPassword():string{
        return this.password
    }

    public setPassword(value:string):void{
        this.password = value
    }
    
    public getRole():ROLE_USER{
        return this.role
    }

    public setRole(value:ROLE_USER):void{
        this.role = value
    }

    public getCreateAt():string{
        return this.created_at
    }

    public setCreateAt(value:string):void{
        this.created_at = value
    }

}

