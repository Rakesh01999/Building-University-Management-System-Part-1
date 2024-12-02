import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

// Controller for root route
const getAController = (req: Request, res: Response) => {
  res.status(200).send("Success"); // HTTP 200 OK with a message
};

app.get('/', getAController);

// // Global error handler middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = err.status || 500; // Use err.status if provided
//   const message = err.message || "Something went wrong!";
  
//   res.status(statusCode).json({
//     success: false,
//     message,
//     error: err.stack || err,
//   });
// });

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
