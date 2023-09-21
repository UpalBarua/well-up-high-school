import Navbar from '@/components/navbar/navbar';
import React from 'react';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='w-[90%] mx-auto'>{children}</main>
    </>
  );
};

export default RootLayout;
