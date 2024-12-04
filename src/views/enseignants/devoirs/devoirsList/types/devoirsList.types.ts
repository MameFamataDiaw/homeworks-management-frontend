import type { ICreateDevoirInput } from "../../createDevoir/types/CreateOrUpdateDevoir.types"

export interface IDevoirsList extends ICreateDevoirInput {
  id: number
  matiere?: {
    nomMatiere: string;
  };
}

export interface IEditDevoirDataInput extends ICreateDevoirInput {
  id: number | null
}
