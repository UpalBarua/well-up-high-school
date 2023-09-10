import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <br />
      <Link href="/dashboard/side-nav">
        <Button className="my-5">Go To Dashboard</Button>
      </Link>
    </div>
  );
};

export default Home;
