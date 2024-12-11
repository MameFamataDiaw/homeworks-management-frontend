import { APP } from "@/shared/App";
import type { IAssignedDevoir } from "../types/assignDevoir.types";
import { verifyToken } from "@/helper/verifyToken";

type AssignDevoirResponseType = {
  status: true
  message: string
  data: IAssignedDevoir
}

export async function assignDevoirHttp(input: IAssignedDevoir) {
  const { headers } = verifyToken()
  return new Promise<AssignDevoirResponseType>(async (resolve, reject) => {
    try {
      const res = await fetch(`${APP.apiURL}/enseignants/devoirs/${input.id}/assigner`, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
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

