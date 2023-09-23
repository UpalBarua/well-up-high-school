import axios from "@/api/axios";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardLayout from "@/layouts/dashboard-layout";
import { ReactElement } from "react";
import TeacherTableData from "./teacherTableData";

const Teachers = ({ teacherData }: any) => {
  console.log(teacherData);
  return (
    <main>
      <h3 className="font-bold py-4">Teacher All Data</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Degress</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teacherData?.map((teacher: any, index: any) => (
            <TeacherTableData key={index} teacher={teacher} />
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

Teachers.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Teachers;

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("/teachers");
    const teacherData = response.data;
    return {
      props: { teacherData },
    };
  } catch (error) {
    console.log("Error teacher fetching data", error);
    return {
      props: { teacherData: null },
    };
  }
};
