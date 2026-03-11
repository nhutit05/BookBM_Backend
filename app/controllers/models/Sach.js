import mongoose from "mongoose";

const sachSchema = new mongoose.Schema({
  tenSach: {
    type: String,
    required: true,
  },
  donGia: {
    type: Number,
    min: 0,
  },
  soQuyen: {
    type: Number,
    min: 0,
    default: 0,
  },
  namXuatBan: {
    type: Number,
  },
  tacGia: {
    type: String,
    required: true,
  },
  maNxb: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NhaXuatBan",
    required: true,
  },
});

export default mongoose.model("Sach", sachSchema);
