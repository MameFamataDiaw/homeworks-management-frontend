import type { IRegisterInput } from "@/views/auth/auth-types";

export interface ICreateEleveInput extends IRegisterInput {
  email_parent: string;
  nom_classe: string;
}
