// src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { asyncHandler } from '../helpers/asyncHandler';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public register = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;
    const newUser = await this.authService.register(username, email, password);
    if (newUser) {
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } else {
      res.status(400).json({ message: 'User registration failed' });
    }
  });

  public login = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const token = await this.authService.login(email, password);
    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
}
