export interface ICreateDevoirInput {
  module: string
  contenu: string
  document?: string
  dateAjout: Date
  matiere_id: number
}

export interface IUpdateDevoirInput {
  id: number | null
  module: string
  contenu: string
  dateAjout: Date
  document?: string
  matiere_id: number
}
