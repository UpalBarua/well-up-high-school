import DashboardLayout from '@/layouts/dashboard-layout';
import type { ReactElement } from 'react';

const TeacherDetails = () => {
  return <h1>Teacher Details</h1>;
};

TeacherDetails.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default TeacherDetails;
