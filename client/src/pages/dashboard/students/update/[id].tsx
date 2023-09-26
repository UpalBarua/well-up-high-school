import axios from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/layouts/dashboard-layout";
import { StudentData } from "@/types/types";
import { Label } from "@radix-ui/react-menubar";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
const UpdateDetails: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentData>();
  const router = useRouter();
  const { id } = router.query;
  const [studentData, setStudentData] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`/students/${id}`)
        .then((response) => {
          setStudentData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);

  const hanldeUpdate: SubmitHandler<StudentData> = async (data) => {
    // console.log(data);
    try {
      const response = await axios.patch(`/students/${studentData?._id}`, data);
      const result = response.data;
      console.log(result);

      if (result.status) {
        toast.success(`${studentData?.firstName} Successfully Updated`);
      }
    } catch (error) {}
  };

  return (
    <section className="">
      <h3 className="font-semibold pt-6 pb-3">
        Updated with the following information:
      </h3>
      <form
        onSubmit={handleSubmit(hanldeUpdate)}
        className="w-6/12 bg-white shadow-sm border border-gray-50 py-3 px-6 mx-6 rounded-lg"
      >
        <div>
          <Label htmlFor="fname" className="mb-1">
            First Name
          </Label>
          <Input
            {...register("firstName", { required: true })}
            placeholder="write your name"
            className="col-span-3 mt-1"
          />
        </div>
        <div>
          <Label htmlFor="lname" className="mb-1">
            Last Name
          </Label>
          <Input
            {...register("lastName", { required: true })}
            placeholder="Last name"
            className="col-span-3 mt-1"
          />
        </div>
        <div>
          <Label htmlFor="adress" className="mb-1">
            Adress
          </Label>
          <Input
            {...register("address", { required: true })}
            placeholder="write your adress"
            className="col-span-3 mt-1"
          />
        </div>
        <div className="">
          <Label htmlFor="phone" className="mb-1">
            Phone
          </Label>
          <Input
            {...register("phone", { required: true })}
            placeholder="phone number"
            className="col-span-3 mt-1"
          />
        </div>
        <div>
          <Label htmlFor="session" className="mb-1">
            Session
          </Label>
          <Input
            {...register("classInfo.session", { required: true })}
            placeholder="session"
            className="col-span-3 mt-1"
          />
          <Label htmlFor="group" className="mb-1">
            Group
          </Label>
          <Input
            {...register("classInfo.group", { required: true })}
            placeholder="Group"
            className="col-span-3 mt-1"
          />
          <Label htmlFor="section" className="mb-1">
            Secton
          </Label>
          <Input
            {...register("classInfo.section", { required: true })}
            placeholder="section"
            className="col-span-3 mt-1"
          />
          <Label htmlFor="class" className="mb-1">
            Class
          </Label>
          <Input
            {...register("classInfo.class", { required: true })}
            placeholder="Class"
            className="col-span-3 mt-1"
          />
        </div>
        <div>
          <h3 className="font-medium py-1 pr-2">Status:</h3>
          <select className="focus:outline-0 py-1 rounded-lg">
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <Button className="py-0 px-6 my-5">Save Changes</Button>
      </form>
    </section>
  );
};

UpdateDetails.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default UpdateDetails;
