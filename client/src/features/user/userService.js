import api from "../../utils/api";

const getStatus = async () => {
  const response = await api.get("/auth/status");
  return response.data;
};

const saveImage = async (formData) => {
  const response = await api.post("user/save-detection", formData);

  return response.data;
};

const userService = { getStatus, saveImage };

export default userService;
