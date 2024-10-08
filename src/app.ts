import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import ErrorHandler from './helpers/error-handler';
import Database from './config/db';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes';
import staffRoute from './routes/staff.route';

class App {
  private readonly app: Application;
  private readonly port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '3000');
    this.init();
  }

  private init() {
    this.initConfig();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
  }

  private initConfig() {
    new Database();
  }

  private initMiddlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('combined')); // Add Morgan logging
    dotenv.config();
  }

  private initRoutes() {
    this.app.use('/api/v1/staff', staffRoute);
    this.app.use('/api/v1/auth', AuthRoutes);
  }

  private initErrorHandling() {
    this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.serverError);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default App;