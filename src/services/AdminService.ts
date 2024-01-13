import { PrismaClient } from "@prisma/client";
import { AdminData, AdminRepository } from "../repositories/AdminRepository";


export class AdminService implements AdminRepository {
    constructor(private readonly prisma:PrismaClient ) {}
    
    async get (id: number) : Promise<any>{
        return await this.prisma.admin.findUnique(
            {
                where : {
                    id : id
                }
            }
        ).then( res => res)
    };

    async add (data: AdminData):Promise<AdminData>{
        return await this.prisma.admin.create({
            data : data
        }).then(res => res)
    };

    async getAll() : Promise<AdminData[]>{
        return await this.prisma.admin.findMany()
        .then( res => res);
    };

    async delete(id: number):Promise<AdminData>{
        return await this.prisma.admin.delete({
            where : {
                id : id
            }
        }).then(res => res)
    };
    async update(data: AdminData):Promise<AdminData>{
        return  await this.prisma.admin.update({
            data : data,
            where : {
                id : data.id
            }
        }).then( res => res)
    };

}

