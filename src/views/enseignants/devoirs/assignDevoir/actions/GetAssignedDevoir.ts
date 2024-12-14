import { APP } from "@/shared/App";
import { verifyToken } from "@/helper/verifyToken";
import type { IListAssignedDevoirs } from "../types/assignDevoir.types";

export type GetAssignedDevoirsResponseType = {
  status: true
  message: string
  devoirs: Array<IListAssignedDevoirs>
}

export async function getAssignedDevoirsHttp() {
  const { headers } = verifyToken()
  return new Promise<GetAssignedDevoirsResponseType>(async (resolve, reject) => {
    try {
      const res = await fetch(`${APP.apiURL}/enseignants/devoirsAssignes`, {
        method: "GET",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      if (!res.ok) {
        reject(data)
      }
      resolve(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      reject(error)
    }
  });
}

