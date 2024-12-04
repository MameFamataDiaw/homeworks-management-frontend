import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IElevesList } from "../types/elevesList.types";

export type GetElevesResponseType = {
  status: boolean;
  data: Array<IElevesList>
  total: number;
  current_page: number;
  last_page: number;
} & Record<string, string | number>

export async function getElevesHttp() {

  const { headers } = verifyToken()
  return new Promise<GetElevesResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/eleves`, {
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

export async function GetElevesByClasseHttp(page: number, query: string) {
  const { headers } = verifyToken();

  return new Promise<GetElevesResponseType>(async (resolve, reject) => {
    try {
      const res = await fetch(`${APP.apiURL}/enseignants/eleves/classe?page=${page}&query=${query}`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      console.log("Data fetched:", data);
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
