import React from 'react';
import { Button } from '@/components/ui/button';
import ContactUs from '@/components/contactUs';
import TeacherForm from '@/components/TeacherForm/TeacherForm';

const Home = () => {
  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <TeacherForm></TeacherForm>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
