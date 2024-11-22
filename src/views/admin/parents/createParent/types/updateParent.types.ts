import type { ICreateParentInput } from "./createParent.types";

export interface IUpdateParentInput extends ICreateParentInput {
  id: number | null;
}
