import { APP } from "@/shared/App";
import type { ICreateEleveInput } from "../types/createEleve.types";
import { verifyToken } from "@/helper/verifyToken";

export type EleveResponseType = {
  message: string
}

export async function createEleveHttp(input: ICreateEleveInput) {

  const { headers } = verifyToken()
  return new Promise<EleveResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/eleves`, {
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
