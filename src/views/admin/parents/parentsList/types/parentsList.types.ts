import type { ICreateParentInput } from "../../createParent/types/createParent.types"

export interface IParentsList extends ICreateParentInput {
  id: number
}

export interface IEditParentDataInput extends ICreateParentInput {
  id: number | null
}
