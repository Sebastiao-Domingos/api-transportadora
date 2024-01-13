import { PrismaClient } from "@prisma/client";
import { PneuData, PneuRepository } from "../repositories/PneuRepository";


export class PneuService implements PneuRepository{
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.pneu.findUnique(
            {
                where : {
                    id : id
                },
                include : {
                    caminhao :true
                }
            }
        ).then( res => res)

    }

    async add (data: PneuData):Promise<PneuData>{
        return await this.prisma.pneu.create({
            data : data
        }).then(res => res)
    };

    async getAll() : Promise<PneuData[]>{
        return await this.prisma.pneu.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<PneuData>{
        return await this.prisma.pneu.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: PneuData):Promise<PneuData>{
        return  await this.prisma.pneu.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

