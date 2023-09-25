import axios from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/layouts/dashboard-layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const StudentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postData, setPostData] = useState();
  const handleback = () => {
    router.push("/dashboard/students");
  };
  useEffect(() => {
    if (id) {
      axios
        .get(`/students/${id}`)
        .then((response) => {
          setPostData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id]);
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
              {postData?.firstName} {postData?.lastName}
            </h2>
          </div>
          <p className="text-sm">
            StudentId:{" "}
            <span className="font-semibold">{postData?.studentId}</span>
          </p>

          <div className="flex items-center gap-2">
            <p>{postData?.phone}</p>
            <p>{postData?.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">Edit</Button>
            <Button size="sm" className="bg-red-400 hover:bg-red-600">
              Remove
            </Button>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      <div className="flex gap-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">ClassInfo</h3>
          <h4 className="flex">
            {" "}
            Session: <p className="pl-2">{postData?.classInfo.session}</p>
          </h4>
          <span className="flex">
            {" "}
            Group: <p className="pl-2">{postData?.classInfo.group}</p>
          </span>
          <span className="flex">
            {" "}
            Section: <p className="pl-2">{postData?.classInfo.section}</p>
          </span>
          <span className="flex">
            Class: <p className="pl-2">{postData?.classInfo.class}</p>
          </span>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">Adress</h3>
            <p>{postData?.address}</p>
          </div>
          <div>
            <h3 className="font-semibold">Gender</h3>
            <p>{postData?.gender}</p>
          </div>
          <div>
            <h3 className="font-semibold">Status</h3>
            <p>{`${postData?.status}`}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">Joined</h3>
            <p>{postData?.registrationDate}</p>
          </div>
          <div>
            <h3 className="font-semibold">Birthdate</h3>
            <p>{postData?.birthdate}</p>
          </div>
          <div>
            <h3 className="font-semibold">Blood Group</h3>
            <p>{`${postData?.bloodGroup}`}</p>
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
