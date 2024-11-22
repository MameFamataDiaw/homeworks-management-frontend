import type { IRegisterInput } from "@/views/auth/auth-types";

export interface ICreateEnseignantInput extends IRegisterInput {
  user_id: number
  telephone: string
}
