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
    this.router.post("/", this.staffController.create.bind(this.staffController)); // Create
    this.router.get("/", this.staffController.findAll.bind(this.staffController)); // Get all
    this.router.get("/:id", this.staffController.findById.bind(this.staffController)); // Get by ID
    this.router.put("/:id", this.staffController.update.bind(this.staffController)); // Update
    this.router.delete("/:id", this.staffController.delete.bind(this.staffController)); // Delete
  }
}

export default new StaffRoute().router;
