export interface IListDevoirsAfaire {
  devoir_id: number
  matiere: string
  module: string
  date_attribution: string
  aRendre: string
  soumis: boolean
  note: number | null
  commentaire: string | null
}

export interface ISoumettreDevoir {
  devoirId: number
}
