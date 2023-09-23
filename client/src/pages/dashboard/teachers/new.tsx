import DashboardLayout from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import TeacherForm from '@/components/TeacherForm/TeacherForm';

const NewTeacher = () => {
  return (
    <section>
      <h2>Add New Teacher</h2>
      <TeacherForm />
    </section>
  );
};

NewTeacher.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NewTeacher;
