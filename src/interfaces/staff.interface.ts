import mongoose from 'mongoose';

interface IStaff extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
  contactInformation: string;
  department: string;
  schedule: string;
}

export default IStaff;
