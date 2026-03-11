import mongoose from "mongoose";

const nhaXuatBanSchema = new mongoose.Schema({
  tenNxb: {
    type: String,
    required: true,
  },
  diaChi: {
    type: String,
  },
});

export default mongoose.model("NhaXuatBan", nhaXuatBanSchema);
