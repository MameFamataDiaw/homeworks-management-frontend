export interface IListDevoirsAfaire {
  id: number
  matiere: string
  module: string
  date_attribution: string
  dateSoumission: string
  soumis: boolean
  note: number | null
  commentaire: string | null
}
