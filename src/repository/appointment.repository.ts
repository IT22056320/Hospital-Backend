// repository/appointment.repository.ts

import Appointment from '../models/appointment.model';
import IAppointment from '../interfaces/appointment.interface';

class AppointmentRepository {
  async create(appointmentData: IAppointment): Promise<IAppointment> {
    const newAppointment = new Appointment(appointmentData);
    return newAppointment.save();
  }

  async findByDoctor(doctorId: string): Promise<IAppointment[]> {
    return Appointment.find({ doctorId }).populate('doctorId');
  }

  async findById(id: string): Promise<IAppointment | null> {
    return Appointment.findById(id).populate('doctorId');
  }

  async delete(id: string): Promise<IAppointment | null> {
    return Appointment.findByIdAndDelete(id);
  }
}

export default AppointmentRepository;
