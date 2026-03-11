import mongoose from "mongoose";

const docGiaSchema = new mongoose.Schema({
  hoLot: {
    type: String,
    required: true,
  },
  ten: {
    type: String,
    required: true,
  },
  ngaySinh: {
    type: Date,
  },
  phai: {
    type: String,
    enum: ["Nam", "Nu"],
  },
  diaChi: {
    type: String,
  },
  dienThoai: {
    type: String,
    match: /^[0-9]{10}$/,
  },
});

export default mongoose.model("DocGia", docGiaSchema);
