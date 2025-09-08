import { defineStore } from "pinia";
import { ApiLogin } from "../api/login.api";
import { message } from "ant-design-vue";

const useAuth = defineStore("login", {
  state: () => ({
    loader: false,
  }),

  actions: {
    LoginUser(form, router) {
      this.loader = true;

      ApiLogin(form, router)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.token);
          router.push("/dashboard/users");
        })
        .catch((err) => {
          message.error(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
});

export default useAuth;
