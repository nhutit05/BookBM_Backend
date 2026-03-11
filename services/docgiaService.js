import DocGia from "../models/DocGia.js";

export const createDocGia = async (data) => {
  return await DocGia.create(data);
};

export const getAllDocGia = async () => {
  return await DocGia.find();
};

export const getDocGiaById = async (id) => {
  const docGia = await DocGia.findById(id);

  if (!docGia) throw new Error("Không tìm thấy độc giả");

  return docGia;
};

export const updateDocGia = async (id, data) => {
  const docGia = await DocGia.findByIdAndUpdate(id, data, { new: true });

  if (!docGia) throw new Error("Không tìm thấy độc giả");

  return docGia;
};

export const deleteDocGia = async (id) => {
  const docGia = await DocGia.findByIdAndDelete(id);

  if (!docGia) throw new Error("Không tìm thấy độc giả");
};
