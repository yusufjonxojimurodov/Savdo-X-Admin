import api from "../utils/api/api";

export function ApiLogin(form) {
  return api({
    url: "/api/login",
    method: "POST",
    data: form,
  });
}
