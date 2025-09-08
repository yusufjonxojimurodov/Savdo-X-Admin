import { defineStore } from "pinia";
import { ApiGetUserMe } from "../api/user.me.api";
import { message } from "ant-design-vue";

const useMe = defineStore("user", {
  state: () => ({
    userInfo: {},
    loader: false,
  }),

  getters: {
    isAuth: (state) => !!state.userInfo && !!state.userInfo._id,
    role: (state) => state.userInfo?.role || null,
  },

  actions: {
    async getUserMe() {
      this.loader = true;
      try {
        const { data } = await ApiGetUserMe();
        this.userInfo = data;
        return data;
      } catch (err) {
        message.error("Foydalanuvchini olishda xato!");
        throw err;
      } finally {
        this.loader = false;
      }
    },
  },
});

export default useMe;