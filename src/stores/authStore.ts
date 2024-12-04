import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      role: "",
    },
  }),
  actions: {
    setRole(role: string) {
      this.user.role = role;
    },
  },
});
