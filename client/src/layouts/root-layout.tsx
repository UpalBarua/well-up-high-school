import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="container">header</header>
      <main className="container">{children}</main>
      <footer className="container">footer</footer>
    </>
  );
};

export default RootLayout;
