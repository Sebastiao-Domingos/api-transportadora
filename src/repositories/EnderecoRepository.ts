import { MotoristaData } from "./MotoristaRepository"

export type EnderecoData = {
    id?    : number
    bairro   :    string
    rua      :    string
    motorista_id  : number
}
  
export type EnderecoDataById = {
    bairro   :    string
    rua      :    string
    motorista_id  : number
    motorista:MotoristaData
}

export interface EnderecoRepository{
    add : (data : EnderecoData) => Promise<EnderecoData>,
    get : (id : number) => Promise<EnderecoDataById>,
    getAll :() => Promise<EnderecoData[]>,
    delete : (id:number) => Promise<EnderecoData>,
    update : (data : EnderecoData) => Promise<EnderecoData>
}