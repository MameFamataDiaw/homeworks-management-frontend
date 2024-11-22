import type { ICreateEnseignantInput } from "./createEnseignant.types";

export interface IUpdateEnseignantInput extends ICreateEnseignantInput {
  id: number | null;
}
