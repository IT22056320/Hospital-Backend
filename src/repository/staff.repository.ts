import IStaff from "../interfaces/staff.interface";
import Staff from "../models/staff.model";
import mongoose, { UpdateQuery } from "mongoose";
import GenericRepository from "./generic.repository";

class StaffRepository extends GenericRepository<IStaff> {
  constructor() {
    super(Staff);
  }

  async findByEmail(email: string): Promise<IStaff | null> {
    return Staff.findOne({ email });
  }

  async findByName(name: string): Promise<IStaff | null> {
    return Staff.findOne({ name });
  }

  async findById(id: string): Promise<IStaff | null> {
    return Staff.findById(id);
  }

  async update(id: string, update: UpdateQuery<IStaff>): Promise<IStaff | null> {
    return Staff.findByIdAndUpdate(id, update, { new: true });
  }

  async delete(id: string): Promise<IStaff | null> {
    return Staff.findByIdAndDelete(id);
  }
  
}

export default StaffRepository;
