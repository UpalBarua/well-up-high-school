import React from 'react';
import { Button } from '@/components/ui/button';
import CreateNoticeForm from '@/components/CreateNoticeForm';

const Home = () => {
  return (
    <div>
      <h1>Hello well up high school!</h1>
      <Button>Click Me!</Button>
      <CreateNoticeForm></CreateNoticeForm>
    </div>
  );
};

export default Home;
