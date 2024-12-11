import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IDevoirsList } from "../types/devoirsList.types";

export type GetDevoirsResponseType = {
  status: boolean;
  data: Array<IDevoirsList>
} & Record<string, string | number>

export async function getDevoirsHttp() {

  const { headers } = verifyToken()
  return new Promise<GetDevoirsResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/enseignants/devoirs`, {
      method: "GET",
      headers: headers,
    })
    const data = await res.json()

    if (!res.ok) {
      reject(data)
    }
    resolve(data)
  })

}
