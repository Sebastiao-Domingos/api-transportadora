import { PrismaClient } from "@prisma/client";
import { EnderecoData, EnderecoRepository } from "../repositories/EnderecoRepository";


export class EnderecoService implements EnderecoRepository{
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.enderenco.findUnique(
            {
                where : {
                    id : id
                },
                include : {
                    motorista : true
                }
            }
        ).then( res => res)
    }

    async add (data: EnderecoData):Promise<EnderecoData>{
        return await this.prisma.enderenco.create({
            data : data
        }).then(res => res)
    };

    async getAll() : Promise<EnderecoData[]>{
        return await this.prisma.enderenco.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<EnderecoData>{
        return await this.prisma.enderenco.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: EnderecoData):Promise<EnderecoData>{
        return  await this.prisma.enderenco.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

