import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex gap-5 relative">
      <aside className="bg-red-200 p-5 w-56 hidden md:block">
        <div className="fixed h-full">
          <h2>Main Menu</h2>
          <ul>
            <li>Overview</li>
            <li>Notices</li>
            <li>Clubs</li>
            <li>Gallery</li>
            <li>Teachers</li>
            <li>Students</li>
            <li>Management</li>
          </ul>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
