// src/services/AuthService.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

export class AuthService {
  private jwtSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || 'JWT_SECRET';
  }

  public async register(username: string, email: string, password: string): Promise<IUser | null> {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      return await newUser.save();
    } catch (error) {
      console.error('Registration error:', error);
      return null;
    }
  }

  public async login(email: string, password: string): Promise<string | null> {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      const token = jwt.sign({ userId: user._id }, this.jwtSecret, { expiresIn: '1h' });
      return token;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }
}
