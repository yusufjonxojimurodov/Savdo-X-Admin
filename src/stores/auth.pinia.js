import { defineStore } from "pinia";
import { ApiLogin } from "../api/login.api";
import { message } from "ant-design-vue";
import useMe from "./me.pinia";

const useAuth = defineStore("login", {
  state: () => ({
    loader: false,
  }),

  actions: {
    async LoginUser(form, router) {
      this.loader = true;
      const meStore = useMe();

      try {
        const { data } = await ApiLogin(form);
        localStorage.setItem("access_token", data.token);

        const user = await meStore.getUserMe();

        if (!["admin"].includes(user.role)) {
          return router.push("/403");
        }

        router.push("/dashboard/users");
      } catch (err) {
        message.error("Login xato!");
      } finally {
        this.loader = false;
      }
    },
  },
});

export default useAuth;