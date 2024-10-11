import mongoose from "mongoose";

interface IStaff extends mongoose.Document {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string; // e.g., doctor, nurse, etc.
  contactInformation: string;
  department: string;
  schedule: string; // e.g., shift details, available time slots
}

export default IStaff;
