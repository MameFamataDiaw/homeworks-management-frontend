import type { ICreateEleveInput } from "./createEleve.types";

export interface IUpdateEleveInput extends ICreateEleveInput {
  id: number | null;
}
