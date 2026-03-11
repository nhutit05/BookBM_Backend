import Sach from "../models/Sach.js";

export const createSach = async (data) => {
  return await Sach.create(data);
};

export const getAllSach = async () => {
  return await Sach.find().populate("maNxb");
};

export const updateSach = async (id, data) => {
  const sach = await Sach.findByIdAndUpdate(id, data, { new: true });

  if (!sach) throw new Error("Không tìm thấy sách");

  return sach;
};

export const deleteSach = async (id) => {
  const sach = await Sach.findByIdAndDelete(id);

  if (!sach) throw new Error("Không tìm thấy sách");
};
