import AddStudent from "@/components/AddStudent";
import DashboardLayout from "@/layouts/dashboard-layout";
import { ReactElement } from "react";

const NewStudent = () => {
  return (
    <section>
      <AddStudent />
    </section>
  );
};

NewStudent.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NewStudent;
