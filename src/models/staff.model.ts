import mongoose, { Document } from 'mongoose';

// Define the IStaff interface
export interface IStaff extends Document {
  name: string;
  email: string;
  password: string;
  role: string; // doctor, nurse, admin, etc.
  contactInformation: string;
  department: string;
  schedule: string;
}

// Define the schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // doctor, nurse, admin, etc.
  contactInformation: { type: String, required: false },
  department: { type: String, required: false },
  schedule: { type: String, required: false },
}, {
  timestamps: true,
});

// Export the model and the interface
const Staff = mongoose.model<IStaff>('Staff', staffSchema);
export default Staff;
