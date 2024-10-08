import mongoose from "mongoose";
interface IStaff extends mongoose.Document {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default IStaff;