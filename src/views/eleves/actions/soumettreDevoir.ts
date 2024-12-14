import { APP } from "@/shared/App";

export type GetAfaireResponseType = {
  status: boolean;
  message: string;
}

export async function soumettreDevoirHttp(devoirId: number): Promise<GetAfaireResponseType> {
  // return new Promise<GetInfoResponseType>(async (resolve, reject) => {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const url = `${APP.apiURL}/eleves/soumettre/${devoirId}`;
  const res = await fetch(url, {
    method: "POST",
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
    message: data.message
  };
  // })
}
