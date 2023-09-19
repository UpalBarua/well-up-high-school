import React from "react";
import { Button } from "@/components/ui/button";
import CreateNoticeForm from "@/components/NoticeForm";
import ContactUs from "@/components/contactUs";
import TeacherForm from "@/components/TeacherForm/TeacherForm";
import { useAuth } from "@/contexts/auth-context";
import HomeCarousel from "@/components/home/carousel";
import PrincipleTalk from "@/components/home/principles-talk";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <CreateNoticeForm></CreateNoticeForm>
      <TeacherForm></TeacherForm>
      <ContactUs></ContactUs>
      <HomeCarousel />
      <PrincipleTalk />
    </div>
  );
};

export default Home;
