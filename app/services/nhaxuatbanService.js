import NhaXuatBan from "../models/NhaXuatBan.js";

export const createNXB = async (data) => {
  return await NhaXuatBan.create(data);
};

export const getNXB = async () => {
  return await NhaXuatBan.find();
};
