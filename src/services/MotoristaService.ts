import { PrismaClient } from "@prisma/client";
import { MotoristaData, MotoristaRepository } from "../repositories/MotoristaRepository";


export class MotoristaService implements MotoristaRepository{
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.motorista.findUnique(
            {
                where : {
                    id : id
                },
                include : {
                    enderenco : true,
                    viagem:true
                }
            }
        ).then( res => res)

    }

    async add (data: MotoristaData):Promise<MotoristaData>{
        return await this.prisma.motorista.create({
            data : data
        }).then(res => res)
    };

    async getAll() : Promise<MotoristaData[]>{
        return await this.prisma.motorista.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<MotoristaData>{
        return await this.prisma.motorista.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: MotoristaData):Promise<MotoristaData>{
        return  await this.prisma.motorista.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

