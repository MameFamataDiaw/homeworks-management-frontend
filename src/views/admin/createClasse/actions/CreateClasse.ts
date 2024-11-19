import { APP } from "@/shared/App";
import type { ICreateClasseInput } from "../types/createClasse.types";
import { verifyToken } from "@/helper/verifyToken";

export type ClasseResponseType = {
  message: string
}

export async function createClasseHttp(input: ICreateClasseInput) {

  const { headers } = verifyToken()
  return new Promise<ClasseResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/classes`, {
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
