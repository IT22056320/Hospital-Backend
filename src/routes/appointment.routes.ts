// routes/appointment.routes.ts

import { Router } from 'express';
import AppointmentController from '../controllers/appointment.controller';

class AppointmentRoute {
  private readonly appointmentController: AppointmentController;
  public readonly router: Router;

  constructor() {
    this.appointmentController = new AppointmentController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post('/', this.appointmentController.create.bind(this.appointmentController)); // Create appointment
    this.router.get('/doctor/:doctorId', this.appointmentController.findByDoctor.bind(this.appointmentController)); // Get all appointments by doctor
    this.router.get('/:id', this.appointmentController.findById.bind(this.appointmentController)); // Get appointment by ID
    this.router.delete('/:id', this.appointmentController.delete.bind(this.appointmentController)); // Delete appointment
  }
}

export default new AppointmentRoute().router;
