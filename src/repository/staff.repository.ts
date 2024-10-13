import { IStaff } from "../models/staff.model";  // Importing IStaff from model now
import Staff from "../models/staff.model";
import mongoose, { UpdateQuery } from "mongoose";
import GenericRepository from "./generic.repository";

class StaffRepository extends GenericRepository<IStaff> {
  constructor() {
    super(Staff);
  }

  // Find staff member by email
  async findByEmail(email: string): Promise<IStaff | null> {
    return Staff.findOne({ email });
  }

  // Find staff member by name
  async findByName(name: string): Promise<IStaff | null> {
    return Staff.findOne({ name });
  }

  // Find staff member by ID
  async findById(id: string): Promise<IStaff | null> {
    return Staff.findById(id);
  }

  // Update staff member by ID
  async update(id: string, update: UpdateQuery<IStaff>): Promise<IStaff | null> {
    return Staff.findByIdAndUpdate(id, update, { new: true });
  }

  // Delete staff member by ID
  async delete(id: string): Promise<IStaff | null> {
    return Staff.findByIdAndDelete(id);
  }
}

export default StaffRepository;
