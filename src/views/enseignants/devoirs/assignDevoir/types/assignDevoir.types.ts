export interface IAssignedDevoir {
  id: number
  aRendre: Date | string
}

export interface IListAssignedDevoirs {
  id: number,
  matiere: {
    nomMatiere: string;
  } | null;
  module: string
  soumissions: Array<{
    dateAttribution: string; // String format (JSON ISO Date)
    aRendre: string;
  }>;
}
