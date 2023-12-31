import CounterSection from "@/components/CounterSection";
import ContactUs from "@/components/contactUs";
import Event from "@/components/event";
import FAQ from "@/components/home/accordion";
import HomeCarousel from "@/components/home/carousel";
import PrincipleTalk from "@/components/home/principles-talk";
import { useAuth } from "@/contexts/auth-context";

import { useEffect } from "react";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <HomeCarousel />
      <PrincipleTalk />
      <CounterSection />
      <Event />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default Home;
