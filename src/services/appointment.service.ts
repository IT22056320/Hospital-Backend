// services/appointment.service.ts

import IAppointment from '../interfaces/appointment.interface';
import AppointmentRepository from '../repository/appointment.repository';

class AppointmentService {
  private readonly appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async create(data: IAppointment): Promise<IAppointment> {
    return this.appointmentRepository.create(data);
  }

  async findByDoctor(doctorId: string): Promise<IAppointment[]> {
    return this.appointmentRepository.findByDoctor(doctorId);
  }

  async findById(id: string): Promise<IAppointment | null> {
    return this.appointmentRepository.findById(id);
  }

  async delete(id: string): Promise<IAppointment | null> {
    return this.appointmentRepository.delete(id);
  }
}

export default AppointmentService;
