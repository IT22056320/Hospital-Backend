import mongoose from "mongoose";
import IStaff from "../interfaces/staff.interface";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model<IStaff>("Staff", staffSchema);
export default Staff;