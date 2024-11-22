import { APP } from "@/shared/App";
import type { IUpdateParentInput } from "../types/updateParent.types";
import { verifyToken } from "@/helper/verifyToken";

export type ParentResponseType = {
  message: string
}

export async function updateParentHttp(input: IUpdateParentInput) {

  const { headers } = verifyToken()
  return new Promise<ParentResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/parents/${input.id}`, {
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
