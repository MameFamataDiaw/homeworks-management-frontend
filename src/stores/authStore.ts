// import { verifyToken } from "@/helper/verifyToken";
// import { APP } from "@/shared/App";
import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      role: "",
      // childrenClasses: [] as { id: number; nomClasse: string }[], // Définissez le type ici
    },
  }),
  actions: {
    setRole(role: string) {
      this.user.role = role;
    },

    // async fetchChildrenClasses() {
    //   const { headers } = verifyToken()
    //   try {
    //     const response = await fetch(`${APP.apiURL}/parents/classes`, {
    //       method: "GET",
    //       headers: headers,
    //     })
    //     const data = await response.json();
    //     this.user.childrenClasses = data;
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération des classes :", error);
    //   }
    // }
  },
});
