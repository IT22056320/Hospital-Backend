import Appointment from '../models/appointment.model';
import IAppointment from '../interfaces/appointment.interface';
import mongoose from 'mongoose';

class AppointmentRepository {
  async create(appointmentData: IAppointment): Promise<IAppointment> {
    const newAppointment = new Appointment(appointmentData);
    return newAppointment.save();
  }

  // Find all appointments and populate staffId with staff details
  async findAll(): Promise<IAppointment[]> {
    return Appointment.find().populate({
      path: 'staffId',
      match: { role: 'Doctor' }, // Ensure that only doctors are fetched
      select: 'name email specialization role', // Fetch name, email, and specialization
    });
  }

  async findByDoctor(staffId: mongoose.Types.ObjectId): Promise<IAppointment[]> {
    return Appointment.find({ staffId }).populate({
      path: 'staffId',
      match: { role: 'Doctor' }, // Ensure that the role is Doctor
      select: 'name email specialization',
    });
  }

  async findById(id: string): Promise<IAppointment | null> {
    return Appointment.findById(id).populate({
      path: 'staffId',
      match: { role: 'Doctor' }, // Ensure that the role is Doctor
      select: 'name email specialization',
    });
  }

  async delete(id: string): Promise<IAppointment | null> {
    return Appointment.findByIdAndDelete(id);
  }
}

export default AppointmentRepository;
