import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./Login.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [isText, setIsText] = useState(false);
  const passRef = useRef();

  const handleShowPassword = () => {
    setIsText(!isText);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full md:max-w-[480px] lg:max-w-[480px] md:px-4 lg:px-6 lg:py-12 mx-auto mt-8">
      <div className="flex flex-col gap-2 p-10 border shadow-sm">
        <h1 className="text-md font-bold mb-2">Log in to your xxxx account</h1>
        <div className="flex flex-col gap-2">
          <button className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3">
            <FcGoogle className="text-3xl" /> Continue with Google
          </button>
          <button className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3">
            <BsFacebook className="text-3xl text-[#3b5998]" /> Continue with
            Facebook
          </button>
          <button className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3">
            <BsGithub className="text-3xl" /> Continue with Github
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div>
            <input
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {/* {errors.email && <span>Invalid email</span>} */}
          </div>
          <div className="relative">
            <input
              ref={passRef}
              className="border-[1px] border-black inline-block outline-none px-3 py-4 input_field w-full"
              type={isText ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {isText ? (
              <AiOutlineEyeInvisible
                onClick={handleShowPassword}
                className="absolute top-5 right-2 cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={handleShowPassword}
                className="absolute top-5 right-2 cursor-pointer"
              />
            )}
            {/* {errors.password && <span>Invalid password</span>} */}
          </div>
          <button
            className="bg-orange-700 py-3 w-full mt-3 text-white font-bold"
            type="submit"
          >
            Log in
          </button>
        </form>
        <div className="text-center my-2">
          <span className="font-normal mr-1">or</span>
          <Link className="font-bold underline text-orange-600" to="#">
            Frogot Password
          </Link>
        </div>
        <hr />
        <div className="text-center">
          <span>
            {"Don't have an account? "}
            <Link
              className="font-semibold underline text-orange-600"
              to="/signup"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
