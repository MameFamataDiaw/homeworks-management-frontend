import { APP } from "@/shared/App";
import type { IUpdateDevoirInput } from "../types/CreateOrUpdateDevoir.types";
import { verifyToken } from "@/helper/verifyToken";

export type DevoirResponseType = {
  message: string
}

export async function updateDevoirHttp(input: IUpdateDevoirInput) {

  const { headers } = verifyToken()
  return new Promise<DevoirResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/devoirs/${input.id}`, {
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
