import api from "../../utils/api";

const login = async (data) => {
  const response = await api.post("/auth/signin", data);
  return response.data;
};

const logout = async () => {
  const response = await api.get("/auth/logout");
  return response.data;
};

const authService = { login, logout };

export default authService;
