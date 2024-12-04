import { APP } from "@/shared/App";

export async function getTeacherClassInfoHttp() {
  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token : '';

  if (!token) {
    throw new Error("Utilisateur non authentifie");
  }

  const res = await fetch(`${APP.apiURL}/enseignants/classe`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Erreur lors de la récupération des données.");
  }

  return data;
}
