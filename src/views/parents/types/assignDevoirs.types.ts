export interface IDevoirStats {
  total: number
  soumis: number
  non_soumis: number
}

export interface IDevoirsAssignes {
  matiere: string
  module: string
  date_attribution: string
  date_soumission: string
  soumis: boolean
  note: number | null
  commentaire: string | null
}

export interface IChildClassInfo {
  id: number | undefined
  enfant: string
  classe: {
    id: number
    nomClasse: string
  } | null
  devoirs: IDevoirsAssignes[]
  stats: IDevoirStats
}
