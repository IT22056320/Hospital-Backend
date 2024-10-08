import { Router } from "express";
import StaffController from "../controllers/staff.controller";

class StaffRoute {
  private readonly staffController: StaffController;
  public readonly router: Router;

  constructor() {
    this.staffController = new StaffController();
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post("/", this.staffController.create.bind(this.staffController));
    this.router.get("/", this.staffController.findAll.bind(this.staffController));
  }
}

export default new StaffRoute().router;