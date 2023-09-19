import Navbar from '@/components/navbar';
import TeachersList from '@/pages/teachers';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        {children}
        </main>
    </>
  );
};


export default RootLayout;
