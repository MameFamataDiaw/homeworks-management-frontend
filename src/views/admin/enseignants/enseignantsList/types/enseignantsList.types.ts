import type { ICreateEnseignantInput } from "../../createEnseignant/types/createEnseignant.types"

export interface IEnseignantsList extends ICreateEnseignantInput {
  id: number
}

export interface IEditEnseignantDataInput extends ICreateEnseignantInput {
  id: number | null
}
