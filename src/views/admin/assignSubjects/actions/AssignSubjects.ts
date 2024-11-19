import { APP } from '@/shared/App';
import type { IAssignSubjectsInput } from '../types/assignSubjects.types';
import { verifyToken } from '@/helper/verifyToken';


export type AssignSubjectsResponseType = {
  message: string;
};

export async function assignSubjectsHttp(input: IAssignSubjectsInput) {
  const { headers } = verifyToken();
  return new Promise<AssignSubjectsResponseType>(async (resolve, reject) => {
    const res = await fetch(`${APP.apiURL}/classes/${input.classeId}/matieres`, {
      method: "POST",
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        matiere_ids: input.matieres_ids
      })

    });

    const data = await res.json();

    if (!res.ok) {
      reject(data);
    }
    resolve(data);
  });
}
