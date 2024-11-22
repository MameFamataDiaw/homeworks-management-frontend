import { APP } from "@/shared/App";
import type { ICreateEnseignantInput } from "../types/createEnseignant.types";
import { verifyToken } from "@/helper/verifyToken";

export type EnseignantResponseType = {
  message: string
}

export async function createEnseignantHttp(input: ICreateEnseignantInput) {

  const { headers } = verifyToken()
  return new Promise<EnseignantResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/enseignants`, {
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
