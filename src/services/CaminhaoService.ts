import { PrismaClient } from "@prisma/client";
import { CaminhaoData, CaminhaoRepository } from "../repositories/CaminhaoRepository";


export class CaminhaoService implements CaminhaoRepository{
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.caminhao.findUnique(
            {
                where : {
                    id : id
                },
                include : {
                    pneu : true,
                    viagem : true
                }
            }
        ).then( res => res)

    }

    async add (data: CaminhaoData):Promise<CaminhaoData>{
        return await this.prisma.caminhao.create({
            data : data
        }).then(res => res)
    };

    async getAll() : Promise<CaminhaoData[]>{
        return await this.prisma.caminhao.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<CaminhaoData>{
        return await this.prisma.caminhao.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: CaminhaoData):Promise<CaminhaoData>{
        return  await this.prisma.caminhao.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

