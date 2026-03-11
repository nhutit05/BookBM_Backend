import mongoose from "mongoose";

const theoDoiMuonSachSchema = new mongoose.Schema({
  maDocGia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DocGia",
    required: true,
  },

  maSach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sach",
    required: true,
  },
  maNhanVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NhanVien",
    required: true,
  },
  ngayMuon: {
    type: Date,
    default: Date.now,
  },
  ngayTra: {
    type: Date,
    default: null,
  },
});

export default mongoose.model("TheoDoiMuonSach", theoDoiMuonSachSchema);
