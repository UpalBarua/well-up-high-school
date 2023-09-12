import axios from "@/api/axios";
import React, { useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import SubjectInput from "./SubjectInput";
import ClassInput from "./ClassInput";
import DegreeInput from "./DegreeInput";

const TeacherForm: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const [subjects, setSubjects] = useState([""]);
  const [classesTaught, setClassesTaught] = useState([""]);
  const [degrees, setDegrees] = useState([""]);

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await axios.post("teacher", data);
      // console.log(response);
      // console.log(data);
      alert("Success!");
    } catch (error) {
      // console.log(data);
      alert("Error");
      console.error("Error creating notice:", error);
    }
  };

  const addSubject = () => {
    setSubjects([...subjects, ""]);
  };

  const removeSubject = (index: number) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  const addClassTaught = () => {
    setClassesTaught([...classesTaught, ""]);
  };

  const removeClassTaught = (index: number) => {
    const updatedClassesTaught = [...classesTaught];
    updatedClassesTaught.splice(index, 1);
    setClassesTaught(updatedClassesTaught);
  };

  const addDegree = () => {
    setDegrees([...degrees, ""]);
  };

  const removeDegree = (index: number) => {
    const updatedDegrees = [...degrees];
    updatedDegrees.splice(index, 1);
    setDegrees(updatedDegrees);
  };

  return (
    <div className="md:p-4">
      <form
        className=" max-w-full md:max-w-[60%] mx-auto bg-white shadow-md rounded-lg px-3 py-3 md:px-8 md:py-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name:
          </label>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
              />
            )}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            )}
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gender:
          </label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <div className="relative">
                <select
                  {...field}
                  className="block appearance-none w-full border rounded-md py-2 px-3 leading-tight bg-white text-gray-700 border-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone:
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone"
              />
            )}
          />
        </div>

        {/* Years of Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Years of Experience:
          </label>
          <Controller
            name="yearsOfExperience"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Years of Experience"
              />
            )}
          />
        </div>

        {/* Specialized Role */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Specialized Role:
          </label>
          <Controller
            name="specializedRole"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Specialized Role"
              />
            )}
          />
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subjects Taught:
          </label>
          {subjects.map((subject, index) => (
            <SubjectInput
              key={index}
              index={index}
              control={control}
              removeSubject={removeSubject}
            ></SubjectInput>
          ))}
          <button
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
            type="button"
            onClick={addSubject}
          >
            Add Subject
          </button>
        </div>

        {/* Classes Taught */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Classes Taught:
          </label>
          {classesTaught.map((cls, index) => (
            <ClassInput
              key={index}
              index={index}
              control={control}
              removeClassTaught={removeClassTaught}
            ></ClassInput>
          ))}
          <button
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
            type="button"
            onClick={addClassTaught}
          >
            Add Class
          </button>
        </div>

        {/* Degrees */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Degrees:
          </label>
          {degrees.map((degree, index) => (
            <DegreeInput
              key={index}
              index={index}
              control={control}
              removeDegree={removeDegree}
            ></DegreeInput>
          ))}
          <button
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
            type="button"
            onClick={addDegree}
          >
            Add Degree
          </button>
        </div>

        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
