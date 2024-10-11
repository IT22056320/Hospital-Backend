// interfaces/appointment.interface.ts

import mongoose from 'mongoose';

interface IAppointment extends mongoose.Document {
  doctorId:string;
  date: Date;
  time: string;
  reason: string;
  patientName: string;
}

export default IAppointment;
