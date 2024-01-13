import { MotoristaData } from "./MotoristaRepository"

export type ViagemData = {
    id?    : number 
    origem: string
    destino: string
    kilometragem :number
    data_inicio: string
    data_fim: string
    caminhao_id :number
    motorista_id: number
}
  
export type EnderecoDataById  = {
    bairro   :    string
    rua      :    string
    motorista_id  : number
    motorista:MotoristaData
}

export interface ViagemRepository{
    add : (data : ViagemData) => Promise<ViagemData>,
    get : (id : number) => Promise<ViagemData>,
    getAll :() => Promise<ViagemData[]>,
    delete : (id:number) => Promise<ViagemData>,
    update : (data : ViagemData) => Promise<ViagemData>
}