import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import { CaminhaoService } from "../services/CaminhaoService";
import { CaminhaoData } from "../repositories/CaminhaoRepository";

const prisma = new PrismaClient();
const service = new CaminhaoService(prisma);

export class CaminhaoController {

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
        const data: CaminhaoData = req.body;
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
        const data: CaminhaoData = req.body;
        data.id = Number(req.params.id);
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
