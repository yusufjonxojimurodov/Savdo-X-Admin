import { defineStore } from "pinia";
import { ApiGetUserMe } from "../api/user.me.api";
import { message } from "ant-design-vue";

const useMe = defineStore("user", {
  state: () => ({
    userInfo: {},
    loader: false,
  }),

  actions: {
    getUserMe() {
      this.loader = true;

      ApiGetUserMe()
        .then(({ data }) => {
          this.userInfo = data;
        })
        .catch((getErr) => {
          message.error(getErr);
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
});

export default useMe;