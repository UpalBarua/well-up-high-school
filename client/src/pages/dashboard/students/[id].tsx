import axios from "@/api/axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/layouts/dashboard-layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";

const StudentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [studentData, setstudentData] = useState();
  const handleback = () => {
    router.push("/dashboard/students");
  };
  useEffect(() => {
    if (id) {
      axios
        .get(`/students/${id}`)
        .then((response) => {
          setstudentData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`/students/${studentData?._id}`);
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        toast.success(`${studentData?.firstName} Delete Successfully`);
      }
    } catch (error) {
      console.error(`Error deleting item with ID ${id}: ${error.message}`);
    }
  };

  return (
    <div className="">
      <div className="flex gap-7">
        <div className="relative h-28 aspect-square">
          <Image
            className="object-center object-cover rounded-full border border-primary-50/50 shadow-sm"
            src="https://firebasestorage.googleapis.com/v0/b/well-up-high-school.appspot.com/o/teachers%2Fdr-terrence-underwood-Io0eEAfSMjY-unsplash.jpg?alt=media&token=849ba77c-a7e6-41f8-a10f-366d27f8823f"
            alt=""
            fill
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold capitalize">
              {studentData?.firstName} {studentData?.lastName}
            </h2>
          </div>
          <p className="text-sm">
            StudentId:{" "}
            <span className="font-semibold">{studentData?.studentId}</span>
          </p>

          <div className="flex items-center gap-2">
            <p>{studentData?.phone}</p>
            <p>{studentData?.email}</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <Link
              className=""
              href={`/dashboard/students/update/${studentData?._id}`}
            >
              <Button size="sm" className="px-3">
                Edit
              </Button>
            </Link>
            {/* remove */}
            <Dialog>
              <DialogTrigger className="py-1 px-2 rounded-lg bg-red-400 text-white">
                Remove
              </DialogTrigger>
              <DialogContent className="bg-slate-700 text-white">
                <DialogHeader>
                  <DialogTitle>
                    Are you sure you want to delete this student?
                  </DialogTitle>
                  <DialogDescription className="py-1 text-sm">
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from servers.
                  </DialogDescription>
                </DialogHeader>
                <Link href="/dashboard/students">
                  {" "}
                  <Button
                    onClick={() => handleDelete(studentData?._id)}
                    size="sm"
                    className="bg-red-400 px-6 hover:bg-red-600"
                  >
                    Confrim Delete
                  </Button>
                </Link>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      <div className="flex gap-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">ClassInfo</h3>
          <h4 className="flex">
            {" "}
            Session: <p className="pl-2">{studentData?.classInfo.session}</p>
          </h4>
          <span className="flex">
            {" "}
            Group: <p className="pl-2">{studentData?.classInfo.group}</p>
          </span>
          <span className="flex">
            {" "}
            Section: <p className="pl-2">{studentData?.classInfo.section}</p>
          </span>
          <span className="flex">
            Class: <p className="pl-2">{studentData?.classInfo.class}</p>
          </span>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">Adress</h3>
            <p>{studentData?.address}</p>
          </div>
          <div>
            <h3 className="font-semibold">Gender</h3>
            <p>{studentData?.gender}</p>
          </div>
          <div>
            <h3 className="font-semibold">Status</h3>
            <p>{`${studentData?.status}`}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">Joined</h3>
            <p>{studentData?.registrationDate}</p>
          </div>
          <div>
            <h3 className="font-semibold">Birthdate</h3>
            <p>{studentData?.birthdate}</p>
          </div>
          <div>
            <h3 className="font-semibold">Blood Group</h3>
            <p>{`${studentData?.bloodGroup}`}</p>
          </div>
        </div>
      </div>
      <Button
        size="sm"
        onClick={handleback}
        className="mt-3 bg-gray-800 px-10 rounded-full"
      >
        Back
      </Button>
    </div>
  );
};

StudentDetails.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default StudentDetails;
