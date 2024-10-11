// models/appointment.model.ts

import mongoose from 'mongoose';

interface IAppointment extends mongoose.Document {
  doctorId:string;
  date: Date;
  time: string;
  reason: string;
  patientName: string;
}

const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    time: { type: String, required: true },
    reason: { type: String, required: true },
    patientName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);
export default Appointment;
