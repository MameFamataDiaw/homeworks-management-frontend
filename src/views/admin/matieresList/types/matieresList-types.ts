import type { ICreateMatiereInput } from "../../createMatiere/types/createMatiere-types";

export interface IMatieresList extends ICreateMatiereInput {
  id: number
}

export interface IEditMatiereDataInput extends ICreateMatiereInput {
  id: number | null
}
