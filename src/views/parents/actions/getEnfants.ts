import { APP } from "@/shared/App";
import type { IChildClassInfo } from "../types/assignDevoirs.types";

export type GetChildListResponseType = {
  status: boolean;
  data: IChildClassInfo[]
}

export async function getChildListHttp(): Promise<GetChildListResponseType> {
  // return new Promise<GetChildListResponseType>(async (resolve, reject) => {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const res = await fetch(`${APP.apiURL}/parents/enfants`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Erreur API");
  }

  return { status: true, data: data.data };
}

