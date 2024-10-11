import { Request, Response } from "express";
import IStaff from "../interfaces/staff.interface";
import StaffService from "../services/staff.service";

class StaffController {
  private readonly staffService: StaffService;

  constructor() {
    this.staffService = new StaffService();
  }

  async create(req: Request, res: Response) {
    try {
      const data: IStaff = req.body;
      const user = await this.staffService.create(data);
      res.status(201).json(user);
    } catch (error) {
      const err = error as Error; // Type-cast error to Error
      res.status(500).json({ message: err.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.staffService.findAll();
      res.status(200).json(users);
    } catch (error) {
      const err = error as Error; // Type-cast error to Error
      res.status(500).json({ message: err.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const user = await this.staffService.findById(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Staff not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      const err = error as Error; // Type-cast error to Error
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await this.staffService.update(req.params.id, req.body);
      if (!user) {
        res.status(404).json({ message: "Staff not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      const err = error as Error; // Type-cast error to Error
      res.status(500).json({ message: err.message });
    }
  }

  
  async delete(req: Request, res: Response) {
    try {
      const user = await this.staffService.delete(req.params.id);
      if (!user) {
        res.status(404).json({ message: "Staff not found" });
      } else {
        res.status(200).json({ message: "Staff deleted successfully" });
      }
    } catch (error) {
      const err = error as Error; // Type-cast error to Error
      res.status(500).json({ message: err.message });
    }
  }
}

export default StaffController;
