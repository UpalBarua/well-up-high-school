import React from 'react';
import { Button } from '@/components/ui/button';
import CreateNoticeForm from '@/components/NoticeForm';
import ContactUs from '@/components/contactUs';
import TeacherForm from '@/components/TeacherForm/TeacherForm';
import { useAuth } from '@/contexts/auth-context';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <CreateNoticeForm></CreateNoticeForm>
      <TeacherForm></TeacherForm>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
