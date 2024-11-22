import type { ICreateEleveInput } from "../../createEleve/types/createEleve.types"

export interface IElevesList extends ICreateEleveInput {
  id: number
}

export interface IEditEleveDataInput extends ICreateEleveInput {
  id: number | null
}
