import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './routes/user.route';
const app: Application = express();
app.use(express.json());
app.use(cors());
// user routes
app.use('/', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'project is running',
  });
});

export default app;
