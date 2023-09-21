<<<<<<< HEAD
import CreateNoticeForm from "@/components/NoticeForm";
import TeacherForm from "@/components/TeacherForm/TeacherForm";
import VideoUpload from "@/components/VideoUpload";
import ContactUs from "@/components/contactUs";
import ImageUploader from "@/components/imageUploader";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import CreateNoticeForm from '@/components/NoticeForm';
import ContactUs from '@/components/contactUs';
import TeacherForm from '@/components/TeacherForm/TeacherForm';
import { useAuth } from '@/contexts/auth-context';
import PhotoGellery from '@/components/Gellery/PhotoGellery/PhotoGellery';
>>>>>>> 3dcbbd50836d62df2b4d8e8b87f8c8637c9fb245

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <CreateNoticeForm></CreateNoticeForm>
      <TeacherForm></TeacherForm>
      <ContactUs></ContactUs>
<<<<<<< HEAD
      <br />
      <ImageUploader />
      <VideoUpload/>
=======
      <PhotoGellery></PhotoGellery>
>>>>>>> 3dcbbd50836d62df2b4d8e8b87f8c8637c9fb245
    </div>
  );
};

export default Home;
