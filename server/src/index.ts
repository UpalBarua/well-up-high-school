import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import imageRoutes from './routes/imageRoutes';
import noticeRoute from './routes/noticeRoutes';
import studentRoutes from './routes/studentRoutes';
import teacherRoutes from './routes/teacherRoutes';
import videoRoutes from './routes/videoRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(morgan('dev'));

app.use('/api/notices', noticeRoute);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/videos', videoRoutes);

mongoose
  .connect(process.env.DB_URI || '')
  .then(() => {
    app.listen(port, () => {
      console.log(`[server] running on http://localhost:${port}/`);
    });
  })
  .catch((error) => console.log(error));
