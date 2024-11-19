import { APP } from "@/shared/App";
import type { IUpdateClasseInput } from "../types/updateClasse-types";
import { verifyToken } from "@/helper/verifyToken";

export type ClasseResponseType = {
  message: string
}

export async function updateClasseHttp(input: IUpdateClasseInput) {

  const { headers } = verifyToken()
  return new Promise<ClasseResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/classes/${input.id}`, {
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
