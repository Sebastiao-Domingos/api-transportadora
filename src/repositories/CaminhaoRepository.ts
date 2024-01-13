
export type CaminhaoData ={
    id? : number
    nome  :        string,
    ano_fabricacao : string,
    km_rodado    :  number,
    marca     :     string
}

export type CaminhaoDataResponse = CaminhaoData & {
    pneus : []
}
  
export interface CaminhaoRepository{
    add : (data : CaminhaoData) => Promise<CaminhaoData>,
    get : (id : number) => Promise<CaminhaoData>,
    getAll :() => Promise<CaminhaoData[]>,
    delete : (id:number) => Promise<CaminhaoData>,
    update : (data : CaminhaoData) => Promise<CaminhaoData>
}