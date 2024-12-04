import { APP } from "@/shared/App";
import type { ICreateDevoirInput } from "../types/CreateOrUpdateDevoir.types";
import { verifyToken } from "@/helper/verifyToken";

export type DevoirResponseType = {
  message: string
}

export async function createDevoirHttp(input: ICreateDevoirInput) {

  const { headers } = verifyToken()
  return new Promise<DevoirResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/enseignants/devoirs`, {
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
