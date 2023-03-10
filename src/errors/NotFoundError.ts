import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(
        message: string = "Recurso não encontrado" // Daniel: mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(404, message)
    }
}