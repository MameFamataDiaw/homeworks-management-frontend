import { APP } from "@/shared/App";
import type { ICreateMatiereInput } from "../types/createMatiere-types";
import { verifyToken } from "@/helper/verifyToken";

export type MatiereResponseType = {
  message: string
}

export async function createMatiereHttp(input: ICreateMatiereInput) {

  const { headers } = verifyToken()
  return new Promise<MatiereResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/matieres`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(input)
    })
    const data = await res.json()

    if (!res.ok) {
      reject(data)
    }
    resolve(data)
  })

}
