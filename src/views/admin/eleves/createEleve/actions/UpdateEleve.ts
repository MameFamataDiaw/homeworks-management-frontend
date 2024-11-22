import { APP } from "@/shared/App";
import type { IUpdateEleveInput } from "../types/updateEleve.types";
import { verifyToken } from "@/helper/verifyToken";

export type EleveResponseType = {
  message: string
}

export async function updateEleveHttp(input: IUpdateEleveInput) {

  const { headers } = verifyToken()
  return new Promise<EleveResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/eleves/${input.id}`, {
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
