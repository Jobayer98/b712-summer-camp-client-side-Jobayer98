import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {/* {errors.email && <span>Invalid email</span>} */}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {/* {errors.password && <span>Invalid password</span>} */}
        </label>
        <button type="submit">Login</button>
      </form>
      <div>
        <button>Login with google</button>
        <button>Login with facebook</button>
      </div>
    </div>
  );
};

export default LoginPage;
