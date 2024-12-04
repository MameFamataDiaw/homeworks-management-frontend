import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IMatieresList } from "../../matieresList/types/matieresList-types";

export type GetMatieresResponseType = {
  data: Array<IMatieresList>
  total: number;
  current_page: number;
  last_page: number;

} & Record<string, string | number>

export async function getMatieresHttp(page: number, query: string) {

  const { headers } = verifyToken()
  return new Promise<GetMatieresResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/matieres/list?page=${page}&query=${query}`, {
      method: "GET",
      headers: headers,
    })
    const data = await res.json()

    if (!res.ok) {
      reject(data)
    }
    resolve(data)
  })

}

export async function GetMatieresByClasseHttp(page: number, query: string) {
  const { headers } = verifyToken();

  return new Promise<GetMatieresResponseType>(async (resolve, reject) => {
    try {
      const res = await fetch(`${APP.apiURL}/enseignants/matieres/classe?page=${page}&query=${query}`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();

      if (!res.ok) {
        reject(data);
      }
      resolve(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // throw new Error(error.response?.data?.message || "Une erreur est survenue")
      reject({ message: error.message || "Une erreur est survenue" });
    }
  })
}
