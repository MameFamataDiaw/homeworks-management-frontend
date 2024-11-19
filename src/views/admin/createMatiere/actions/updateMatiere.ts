import { APP } from "@/shared/App";
import type { IUpdateMatiereInput } from "../types/updateMatiere-types";
import { verifyToken } from "@/helper/verifyToken";

export type MatiereResponseType = {
  message: string
}

export async function updateMatiereHttp(input: IUpdateMatiereInput) {

  const { headers } = verifyToken()
  return new Promise<MatiereResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/matieres/${input.id}`, {
      method: "PUT",
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
