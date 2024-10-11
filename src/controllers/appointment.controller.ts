// controllers/appointment.controller.ts

import { Request, Response } from 'express';
import IAppointment from '../interfaces/appointment.interface';
import AppointmentService from '../services/appointment.service';

class AppointmentController {
  private readonly appointmentService: AppointmentService;

  constructor() {
    this.appointmentService = new AppointmentService();
  }

  async create(req: Request, res: Response) {
    try {
      const appointmentData: IAppointment = req.body;
      const appointment = await this.appointmentService.create(appointmentData);
      res.status(201).json(appointment);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async findByDoctor(req: Request, res: Response) {
    try {
      const doctorId = req.params.doctorId;
      const appointments = await this.appointmentService.findByDoctor(doctorId);
      res.status(200).json(appointments);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const appointment = await this.appointmentService.findById(req.params.id);
      if (!appointment) {
        res.status(404).json({ message: 'Appointment not found' });
      } else {
        res.status(200).json(appointment);
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const appointment = await this.appointmentService.delete(req.params.id);
      if (!appointment) {
        res.status(404).json({ message: 'Appointment not found' });
      } else {
        res.status(200).json({ message: 'Appointment deleted successfully' });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }
}

export default AppointmentController;
