
export type PneuData ={
    id? : number
    durancao :   number
    marca     :     string
    caminhao_id: number
}

export type PneuDataById = {
	id: number,
	marca: string,
	durancao: number,
	caminhao_id: number,
	caminhao: {
		id: number,
		nome: string,
		ano_fabricacao: string,
		km_rodado: number,
		marca: string
	}
}

export interface PneuRepository{
    add : (data : PneuData) => Promise<PneuData>,
    get : (id : number) => Promise<PneuDataById>,
    getAll :() => Promise<PneuData[]>,
    delete : (id:number) => Promise<PneuData>,
    update : (data : PneuData) => Promise<PneuData>
}