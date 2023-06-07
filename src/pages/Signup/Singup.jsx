import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const {
    // reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.con_password) {
      console.log(data);
    } else {
      setError("Password didn't match");
    }

    // reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Name is required</span>
            )}
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
          </label>
          <label htmlFor="password">
            <input
              type="text"
              placeholder="******"
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
          </label>
          <label htmlFor="con_password">
            <input
              type="password"
              placeholder="******"
              {...register("con_password", { required: true })}
            />
          </label>
          {errors.con_password?.type === "required" && (
            <span className="text-red-500">password did not match</span>
          )}
          {error && (
            <span className="text-red-500">{"password didn't match"}</span>
          )}
        </div>
        <button type="submit">Signup</button>
      </form>
      <div>
        <button>Login with google</button>
        <button>Login with facebook</button>
      </div>
    </div>
  );
};

export default SignUpPage;
