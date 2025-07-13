export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    createdAt?: Date;
    updatedAt?: Date;
}