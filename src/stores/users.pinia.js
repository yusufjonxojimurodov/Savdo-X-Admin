import { defineStore } from "pinia";
import {
  ApiDeleteUser,
  ApiGetUsers,
  ApiUpdateRole,
  ApiUpdateUser,
} from "../api/users.api";
import { message } from "ant-design-vue";

const useUsers = defineStore("users", {
  state: () => ({
    users: [],
    totalElements: null,
    page: 0,
    size: 10,
    loader: false,
    buttonLoader: false,
  }),

  actions: {
    getUsers() {
      this.loader = true;

      ApiGetUsers()
        .then(({ data }) => {
          this.users = data.users;
          this.totalElements = data.totalUsers;
        })
        .catch((getError) => {
          message.error(getError);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    updateRole(role, id) {
      this.loader = true;

      ApiUpdateRole(role, id)
        .then(() => {
          message.success("Foydalanuvchi darajasi o'zgartirildi");
          this.getUsers();
        })
        .catch((updateError) => {
          message.error(updateError);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    deleteUser(id) {
      this.buttonLoader = true;

      ApiDeleteUser(id)
        .then(() => {
          message.success("Foydalanuvchi o'chirildi");
          this.getUsers();
        })
        .catch((deleterErr) => {
          message.error(deleterErr);
        })
        .finally(() => {
          this.buttonLoader = false;
        });
    },

    async updateUser(id, form) {
      return ApiUpdateUser(id, form)
        .then(() => {
          message.success("Foydalanuvchi ma'lumoti o'zgartirildi");
          this.getUsers();
        })
        .catch((updateErr) => {
          message.error(updateErr);
        });
    },
  },
});

export default useUsers;
