import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "../Login/Login.css";
import { Radio, RadioGroup } from "react-radio-group";

const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [selectedValue, setselectedValue] = useState("male");
  const {
    // reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.con_password) {
      setError(false);
      data.gender = selectedValue;
      console.log(data);
    } else {
      setError(true);
    }

    // reset();
  };

  const handleChange = () => {
    setselectedValue((preValue) => {
      if (preValue === "male") {
        return "female";
      } else {
        return "male";
      }
    });
  };

  return (
    <div className="w-full md:max-w-[480px] lg:max-w-[480px] md:px-4 lg:px-6 lg:py-12 mx-auto mt-20">
      <div className="flex flex-col gap-2 p-10 border shadow-sm">
        <h1 className="text-md font-bold mb-2">Sign up and start learning</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div>
            <input
              type="text"
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              placeholder="Full name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <input
              type="email"
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">
                Password must be 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500">
                Password must have one capital letter and one special character
              </span>
            )}
          </div>
          <div>
            <input
              type="password"
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              placeholder="Confirm password"
              {...register("con_password", { required: true })}
            />
            {errors.con_password?.type === "required" && (
              <span className="text-red-500">password did not match</span>
            )}
            {error && (
              <span className="text-red-500">{"password didn't match"}</span>
            )}
          </div>

          <div>
            <input
              type="url"
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              name="image"
              id="image"
              placeholder="http://www.example.com"
              {...register("image")}
            />
          </div>

          <div>
            <RadioGroup
              className="flex gap-3"
              name="fruit"
              selectedValue={selectedValue}
              onChange={handleChange}
            >
              <label htmlFor="male">
                <Radio value="male" className="mr-1" />
                Male
              </label>
              <label htmlFor="female">
                <Radio value="female" className="mr-1" />
                Female
              </label>
            </RadioGroup>
          </div>
          <div>
            <input
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone"
              {...register("phone")}
            />
          </div>
          <div>
            <input
              className="border-[1px] border-black inline-block outline-none px-3 py-4 w-full input_field"
              type="text"
              name="address"
              placeholder="Address"
              {...register("address")}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-700 py-3 w-full mt-3 text-white font-bold"
          >
            Signup
          </button>
        </form>
        <div className="text-center">
          <span>
            {"Already have an account? "}
            <Link
              className="font-semibold underline text-orange-600"
              to="/login"
            >
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
