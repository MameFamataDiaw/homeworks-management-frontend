import { APP } from "@/shared/App";
import type { IListDevoirsAfaire } from "../types/devoirsAfaire.types";
export type GetAfaireResponseType = {
  status: boolean;
  devoirs: IListDevoirsAfaire[]
}

export async function getDevoirsAfaireHttp(): Promise<GetAfaireResponseType> {
  // return new Promise<GetInfoResponseType>(async (resolve, reject) => {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const url = `${APP.apiURL}/eleves/devoirsAfaire`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erreur API");
  }
  return {
    status: data.status,
    devoirs: data.devoirs
  };
  // })
}
