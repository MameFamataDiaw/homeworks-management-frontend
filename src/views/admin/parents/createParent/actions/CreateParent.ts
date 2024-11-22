import { APP } from "@/shared/App";
import type { ICreateParentInput } from "../types/createParent.types";
import { verifyToken } from "@/helper/verifyToken";

export type ParentResponseType = {
  message: string
}

export async function createParentHttp(input: ICreateParentInput) {

  const { headers } = verifyToken()
  return new Promise<ParentResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/parents`, {
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
