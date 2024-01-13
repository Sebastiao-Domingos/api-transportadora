import { PrismaClient } from "@prisma/client";
import { AdminData, AdminRepository } from "../repositories/AdminRepository";
import { AdminService } from "../services/AdminService";
import { Request, Response, response } from 'express';
const prisma = new PrismaClient();
const service = new AdminService(prisma);
export class AdminController {

    /**
     * get
     */
    public async getAll(req:Request , res :Response) {
        await service.getAll().then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(401).json(error)
        })
    }

    /**
     * getById
     */
    public async getById( req : Request , res : Response) {
        const id = Number(req.params.id);
        await service.get(id).then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(401).json(error)
        })
    }

    /**
     * create
     */
    public async add(req:Request , res :Response) {
        const data: AdminData = req.body;
        await service.add(data).then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(401).json(error)
        })
    }

    /**
     * update*/
    public async update( req : Request , res : Response) {
        const data: AdminData = req.body;

        await service.update(data).then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(401).json(error)
        })
    }

    /**
     * delete
     */
    public async delete( req : Request , res : Response) {
        const id : number = Number(req.params.id)
        await service.delete(id).then( response => {
            res.status(200).json(response)
        })
        .catch( error => {
            res.status(401).json(error);
        })
    }
}
