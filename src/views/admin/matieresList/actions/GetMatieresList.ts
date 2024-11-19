import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IMatieresList } from "../../matieresList/types/matieresList-types";

export type GetMatieresResponseType = {
  data: Array<IMatieresList>
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
