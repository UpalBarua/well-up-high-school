import Navbar from '@/components/navbar';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};

export default RootLayout;
