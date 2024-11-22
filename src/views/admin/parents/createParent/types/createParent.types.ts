import type { IRegisterInput } from "@/views/auth/auth-types";

export interface ICreateParentInput extends IRegisterInput {
  user_id: number
  telephone: string
}
