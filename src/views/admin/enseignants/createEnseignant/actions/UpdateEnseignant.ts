import { APP } from "@/shared/App";
import type { IUpdateEnseignantInput } from "../types/updateEnseignant.types";
import { verifyToken } from "@/helper/verifyToken";

export type EnseignantResponseType = {
  message: string
}

export async function updateEnseignantHttp(input: IUpdateEnseignantInput) {

  const { headers } = verifyToken()
  return new Promise<EnseignantResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/enseignants/${input.id}`, {
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
