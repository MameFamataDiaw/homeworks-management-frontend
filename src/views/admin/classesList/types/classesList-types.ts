import type { ICreateClasseInput } from "../../createClasse/types/createClasse.types";

export interface IClassesList extends ICreateClasseInput {
  id: number
}

export interface IEditClasseDataInput extends ICreateClasseInput {
  id: number | null
}
