export enum Genre {
  Masculin = 'masculin',
  Feminin = 'feminin',
}

export interface IRegisterInput {
  prenom: string
  nom: string
  genre: Genre
  email: string
  password: string
  password_confirmation: string
  role?: string
}

export interface ILoginInput {
  email: string
  password: string
}

export interface IChangePasswordInput {
  password: string;
  password_confirmation: string;
}
