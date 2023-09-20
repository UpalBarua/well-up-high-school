import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import log from "../../public/signIn.svg";
import Image from "next/image";
import { ErrorMessage } from "@hookform/error-message";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
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
            Login Now
          </h1>
          <p className="text-[1.2rem]">please login with email and password</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* from control for name */}

            {/* from control for email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="appearance-none border rounded p-4 w-full h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="appearance-none border rounded p-4 w-full h-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("password", { required: true })}
              />
            </div>
            {/*            
            <input {...register("exampleRequired", { required: true })} />
          
            {errors.exampleRequired && <span>This field is required</span>} */}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 mt-4 w-full text-white font-bold py-2 px-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* undraw div */}
      <div>
        <Image src={log} alt="" height={500} width={400}></Image>
      </div>
    </section>
  );
};

export default Login;
