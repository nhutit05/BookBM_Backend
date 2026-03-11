import mongoose from "mongoose";

const nhanVienSchema = mongoose.Schema({
  hoTenNv: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  chucVu: {
    type: String,
  },
  diaChi: {
    type: String,
  },
  soDienThoai: {
    type: String,
    match: /^[0-9]{10}$/,
  },
});

export default mongoose.model("NhanVien", nhanVienSchema);
