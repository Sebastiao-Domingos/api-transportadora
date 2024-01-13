
export type AdminData ={
  id? : number
  email :string 
  name  :string
  senha :string
}

export interface AdminRepository{
    add : (data : AdminData) => Promise<AdminData>,
    get : (id : number) => Promise<AdminData>,
    getAll :() => Promise<AdminData[]>,
    delete : (id:number) => Promise<AdminData>,
    update : (data : AdminData) => Promise<AdminData>
}