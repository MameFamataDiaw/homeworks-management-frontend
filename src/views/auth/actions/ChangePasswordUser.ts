import { APP } from "@/shared/App";
import type { IChangePasswordInput } from "../auth-types";

type ChangePasswordResponseType = {
  message: string
}

export async function changePasswordHttp(input: IChangePasswordInput) {

  const token = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}').token
    : '';

  if (!token) {
    throw new Error("Utilisateur non authentifié.");
  }

  return new Promise<ChangePasswordResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/firstLogin`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        // Authorization: `Bearer ${localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}').token : ''}`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input)
    })
    const data = await res.json()
    console.log(data)
    if (!res.ok) {
      console.error("Erreur API :", data);
      reject(data)
    }
    resolve(data)
  })

}
