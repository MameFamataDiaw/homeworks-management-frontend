import type { ICreateEleveInput } from "../../createEleve/types/createEleve.types"

export interface IElevesList extends ICreateEleveInput {
  id: number
  parent?: {
    prenom: string
    nom: string
    telephone: string
  }
}

export interface IEditEleveDataInput extends ICreateEleveInput {
  id: number | null
}
