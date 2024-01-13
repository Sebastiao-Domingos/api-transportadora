import { EnderecoData } from "./EnderecoRepository"

export type MotoristaData ={
  id?   : number
  nome   :               string
  numero_carta_conducao: string
  telefone        :      string
}

export type MotoristaDataById = {
    id?   : number
    nome   :               string
    numero_carta_conducao: string
    telefone        :      string
	endereco:EnderecoData[]
}

export interface MotoristaRepository{
    add : (data : MotoristaData) => Promise<MotoristaData>,
    get : (id : number) => Promise<MotoristaDataById>,
    getAll :() => Promise<MotoristaData[]>,
    delete : (id:number) => Promise<MotoristaData>,
    update : (data : MotoristaData) => Promise<MotoristaData>
}