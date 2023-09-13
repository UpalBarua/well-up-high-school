import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import studentRoutes from './routes/studentRoutes';
import noticeRoute from './routes/noticeRoutes';
import teacherRoutes from './routes/teacherRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api', studentRoutes);
app.use('/api', noticeRoute);
app.use('/api/teacher', teacherRoutes);

mongoose
  .connect(process.env.DB_URI || '')
  .then(() => {
    app.listen(port, () => {
      console.log(`[server] running on http://localhost:${port}/`);
    });
  })
  .catch((error) => console.log(error));
