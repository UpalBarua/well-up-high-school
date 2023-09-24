import axios from "@/api/axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface StudentData {
  firstName: string;
  lastName: string;
  studentId: number;
  bloodGroup: string;
  email: string;
  birthdate: string;
  gender: string;
  address: string;
  phone: string;
  classInfo: {
    session: string;
    group: string;
    class: string;
    section: string;
  };
  registrationDate: string;
  status: string;
}

const AddStudent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentData>();

  const onSubmit: SubmitHandler<StudentData> = (data) => {
    console.log("info from studnet", data);
    try {
      axios.post("/students", data).then((res) => {
        console.log(res.data);
        const result = res.data.data;
        console.log(result);
        if (res.data.status) {
          toast.success(`${result.firstName} Added Successfully`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-lg">Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-wrap w-full justify-evenly mb-2">
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">First Name:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Last Name:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Student ID:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              type="number"
              {...register("studentId", { required: true })}
            />
            {errors.studentId && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Blood Group:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("bloodGroup", { required: true })}
            />
            {errors.bloodGroup && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Email:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Birthdate:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              type="date"
              {...register("birthdate", { required: true })}
            />
            {errors.birthdate && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2 flex items-center">
            <h3 className="font-medium py-1 pr-3">Gender:</h3>
            <select
              {...register("gender", { required: true })}
              className="focus:outline-0 py-2 rounded-lg"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Address:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("address", { required: true })}
            />
            {errors.address && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Phone:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-4">
            <h3 className="font-medium py-1">Session:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("classInfo.session", { required: true })}
            />
            {errors.classInfo?.session && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Group:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("classInfo.group", { required: true })}
            />
            {errors.classInfo?.group && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Class:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("classInfo.class", { required: true })}
            />
            {errors.classInfo?.class && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Section:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              {...register("classInfo.section", { required: true })}
            />
            {errors.classInfo?.section && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-5/12 sm:w-full mb-2">
            <h3 className="font-medium py-1">Registration Date:</h3>
            <input
              className="w-full focus:outline-0 py-2 rounded-lg"
              type="datetime-local"
              {...register("registrationDate", { required: true })}
            />
            {errors.registrationDate && <span>This field is required</span>}
          </div>
        </div>
        <div className="w-full md:w-5/12 sm:w-full mb-2 md:ml-16">
          <h3 className="font-medium py-1 pr-3">Status:</h3>
          <select
            {...register("status", { required: true })}
            className="focus:outline-0 py-2 rounded-lg"
          >
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
          {errors.status && <span>This field is required</span>}
        </div>
        <button
          className="md:ml-16 my-4 py-2 px-10 bg-blue-600 text-white rounded-full"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
