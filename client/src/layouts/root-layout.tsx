import Navbar from "@/components/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <header className="container">header</header> */}
      <Navbar></Navbar>
      <main className="container">{children}</main>
      <footer className="container">footer</footer>
    </>
  );
};

export default RootLayout;
