import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Sign from "../../public/signUp.svg";
import Image from "next/image";
import { auth } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

type Inputs = {
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="flex flex-col lg:flex-row justify-evenly mt-6 lg:mt-14 gap-6 items-center ">
      <div>
        <div className="mb-8">
          <h1 className=" mb-4 text-[1.8rem] font-bold text-blue-600">
            Save Your Account Now
          </h1>
          <p className="text-[1.2rem]">
            Enter your credential to access your Account
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* from control for name */}
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  FirstName
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="FirstName."
                  className="appearance-none border rounded p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("firstName", {
                    required: true,
                  })}
                />
              </div>
              {/* from control for second name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_Name"
                  placeholder="LastName"
                  className="appearance-none border rounded  p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("lastName", {
                    required: true,
                  })}
                />
              </div>
            </div>
            {/* from control for address */}
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="address"
                  className="appearance-none border rounded p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("address", { required: true })}
                />
              </div>
              {/* from control for mobile */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="mobile"
                  className="appearance-none border rounded  p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("mobile", { required: true })}
                />
              </div>
            </div>
            {/* from control for email */}
            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="appearance-none border rounded p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email", { required: true })}
                />
              </div>
              {/* from control for password */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="password"
                  className="appearance-none border rounded p-4 w-56 h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            {/*
            <input {...register("exampleRequired", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>} */}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 mt-4 w-full text-white font-bold py-2 px-4"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>

      {/* undraw div */}
      <div>
        <Image src={Sign} alt="" height={500} width={400}></Image>
      </div>
    </section>
  );
};

export default SignUp;
