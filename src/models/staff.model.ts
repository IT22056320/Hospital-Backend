import mongoose from "mongoose";
import IStaff from "../interfaces/staff.interface";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // New field for staff role
    contactInformation: { type: String, required: true }, // New field for contact information
    department: { type: String, required: true }, // New field for department
    schedule: { type: String, required: true }, // New field for schedule
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model<IStaff>("Staff", staffSchema);
export default Staff;
