import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <aside>sidebar with navigation!</aside>
      {children}
    </>
  );
};

export default DashboardLayout;
