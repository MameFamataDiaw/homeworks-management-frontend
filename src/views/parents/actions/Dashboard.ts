import { APP } from "@/shared/App";
import type { IChildClassInfo } from "../types/assignDevoirs.types";

export type GetInfoResponseType = {
  status: boolean;
  data: IChildClassInfo
}

export async function getDevoirsAssignesHttp(enfantId?: number): Promise<GetInfoResponseType> {
  // return new Promise<GetInfoResponseType>(async (resolve, reject) => {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const url = `${APP.apiURL}/parents/devoirsAssignes${enfantId ? `?enfant_id=${enfantId}` : ''}`;
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
    status: true,
    data: data.data
  };
  // })
}
