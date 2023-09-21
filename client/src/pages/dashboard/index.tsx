import DashboardLayout from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';

const Dashboard = () => {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
