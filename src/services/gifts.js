import axios from "axios";
import userService from "./user";

const baseUrl = "/api/gifts";

const config = () => {
  return userService.getToken();
};

const getAll = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

const create = async (gift) => {
  const response = await axios.post(baseUrl, gift, config());
  return response.data;
};

const update = async (gift) => {
  const response = await axios.put(`${baseUrl}/${gift.id}`, gift, config());
  return response.data;
};

const changeReserved = async (gift) => {
  const response = await axios.patch(`${baseUrl}/${gift.id}`, gift, config());
  return response.data;
};

const deleteGift = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config());
  return response.data;
};

export default {
  getAll,
  create,
  changeReserved,
  update,
  deleteGift,
};
