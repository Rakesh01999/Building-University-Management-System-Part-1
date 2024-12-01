import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// /api/v1/students/create-student

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  //   res.send('Hello World!')
  // const a = 10;
  // res.send(a);
  res.status(200).send("Success"); // HTTP 200 OK with a message

};

app.get('/', getAController);

// console.log(process.cwd()); // E:\web\Programming Hero\Level 2\Mission 01-Be A Typescript Technocrat\Module 8-Mastering The Core concept of Mongoose\first-project

export default app;
