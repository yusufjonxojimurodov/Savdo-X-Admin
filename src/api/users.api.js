import api from "../utils/api/api";

export function ApiGetUsers() {
  return api({
    url: "/api/users/all/users",
    method: "GET",
  });
}

export function ApiUpdateRole(role, id) {
  return api({
    url: `/api/users/update/role/${id}`,
    method: "PUT",
    data: role,
  });
}

export function ApiDeleteUser(id) {
  return api({
    url: `/api/users/${id}`,
    method: "DELETE",
  });
}

export function ApiUpdateUser(id, form) {
  return api({
    url: `/api/users/admin/update-user/${id}`,
    method: "PUT",
    data: form,
  });
}
