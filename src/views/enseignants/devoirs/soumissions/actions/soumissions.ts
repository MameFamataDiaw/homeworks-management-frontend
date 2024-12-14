import { APP } from "@/shared/App";
import type { ISoumissionsList } from "../types/soumissions.types";

export type GetSoumissionsResponseType = {
  status: boolean;
  message: string;
  soumissions: Array<ISoumissionsList>
}

export async function getSoumissionsHttp(devoirId: number): Promise<GetSoumissionsResponseType> {
  // return new Promise<GetInfoResponseType>(async (resolve, reject) => {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const url = `${APP.apiURL}/enseignants/getSoumissions/${devoirId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erreur API");
  }
  return {
    status: data.status,
    message: data.message,
    soumissions: data.soumissions
  };
  // })
}
