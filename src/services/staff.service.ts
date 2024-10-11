import IStaff from "../interfaces/staff.interface";
import StaffRepository from "../repository/staff.repository";
import { UpdateQuery } from "mongoose";

class StaffService {
  private readonly staffRepository: StaffRepository;

  constructor() {
    this.staffRepository = new StaffRepository();
  }

  async create(data: IStaff): Promise<IStaff> {
    return this.staffRepository.create(data);
  }

  async findAll(): Promise<IStaff[]> {
    return this.staffRepository.findAll();
  }

  async findById(id: string): Promise<IStaff | null> {
    return this.staffRepository.findById(id);
  }

  async update(id: string, data: Partial<IStaff>): Promise<IStaff | null> {
    const updateData: UpdateQuery<IStaff> = { $set: data };
    return this.staffRepository.update(id, updateData);
  }

  async delete(id: string): Promise<IStaff | null> {
    return this.staffRepository.delete(id);
  }

  async findByEmail(email: string): Promise<IStaff | null> {
    return this.staffRepository.findByEmail(email);
  }

  async findByName(name: string): Promise<IStaff | null> {
    return this.staffRepository.findByName(name);
  }

  
}

export default StaffService;
