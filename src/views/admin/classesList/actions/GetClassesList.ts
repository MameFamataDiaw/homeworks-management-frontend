import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IClassesList } from "../../classesList/types/classesList-types";

export type GetClassesResponseType = {
  data: Array<IClassesList>
} & Record<string, string | number>

export async function getClassesHttp(page: number, query: string) {

  const { headers } = verifyToken()
  return new Promise<GetClassesResponseType>(async (resolve, reject) => {

    const res = await fetch(`${APP.apiURL}/classes/list?page=${page}&query=${query}`, {
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
