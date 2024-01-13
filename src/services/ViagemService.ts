import { PrismaClient } from "@prisma/client";
import { ViagemData, ViagemRepository } from "../repositories/ViagemRepository";


export class ViagemService implements ViagemRepository{
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.viagem.findUnique(
            {
                where : {
                    id : id
                },
                include : {
                    caminhao:true,
                    motorista : true
                }
            }
        ).then( res => res)

    }

    async add (data: ViagemData):Promise<any>{
        return await this.prisma.viagem.create({
            data: data
        }).then(res => res)
    };

    async getAll() : Promise<ViagemData[]>{
        return await this.prisma.viagem.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<ViagemData>{
        return await this.prisma.viagem.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: ViagemData):Promise<any>{
        return  await this.prisma.viagem.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

