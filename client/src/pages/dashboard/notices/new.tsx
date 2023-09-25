import DashboardLayout from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import CreateNoticeForm from '@/components/NoticeForm';

const newNotice = () => {
  return (
    <section>
      <h2>Add New Notice</h2>
      <div className='w-full lg:w-1/2 px-6'>
      <CreateNoticeForm></CreateNoticeForm>
      </div>
    </section>
  );
};

newNotice.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default newNotice;
