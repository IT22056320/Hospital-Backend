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
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.staffService.findAll();
      res.status(200).json(users);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default StaffController;