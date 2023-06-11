import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const notify = () => toast.success("Login successfully");

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [isText, setIsText] = useState(false);
  const [error, setError] = useState(false);
  const passRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    login,
    loginWithGoogle,
    loginWithFacebook,
    loginWithGithub,
    role,
    setRole,
  } = useContext(AuthContext);

  const from = location.state?.form?.pathname || "/";

  const handleShowPassword = () => {
    setIsText(!isText);
  };

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        setError(false);
        if (res?.user) {
          checkRole(res.user);
          notify();
          res.user.displayName = data.name;
          res.user.photoURL = data.image;
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  // login with google account
  const handleLoginGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        setError(false);
        if (res?.user) {
          notify();

          const user = {
            name: res.user.displayName,
            email: res.user.email,
            role: role,
          };
          saveUser(user);
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  // login with github account

  const handleLoginGithub = () => {
    loginWithGithub()
      .then((res) => {
        setError(false);
        if (res?.user) {
          notify();
          const user = {
            name: res.user.displayName,
            email: res.user.email,
            role: role,
          };
          saveUser(user);
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  // login with facebook account

  const handLoginFacebook = () => {
    loginWithFacebook()
      .then((res) => {
        setError(false);
        if (res?.user) {
          notify();
          const user = {
            name: res.user.displayName,
            email: res.user.email,
            role: role,
          };
          saveUser(user);
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const saveUser = (user) => {
    axios
      .post(
        "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/users",
        user
      )
      .then((res) => {
        checkRole(res.data);
      });
  };

  const checkRole = (user) => {
    if (user && user?.email) {
      axios
        .get(
          `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/users?email=${user?.email}`
        )
        .then((res) => {
          if (res.data?.role) {
            setRole(res.data.role);
          }
        });
    }
  };
  return (
    <div className="w-full md:max-w-[480px] lg:max-w-[500px] md:px-4 lg:px-6 lg:py-12 mx-auto my-8">
      <div className="flex flex-col gap-2 p-10 border  shadow-sm">
        <h1 className="text-md font-bold mb-2 px-5">Log in to your account</h1>
        <div className="flex flex-col gap-2 px-5 mb-5">
          <button
            onClick={handleLoginGoogle}
            className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3"
          >
            <FcGoogle className="text-3xl" /> Continue with Google
          </button>
          <button
            onClick={handLoginFacebook}
            className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3"
          >
            <BsFacebook className="text-3xl text-[#3b5998]" /> Continue with
            Facebook
          </button>
          <button
            onClick={handleLoginGithub}
            className="border-[1px] border-black py-[10px] flex justify-start items-center gap-2 font-bold pl-3"
          >
            <BsGithub className="text-3xl" /> Continue with Github
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div>
            <input
              className="border-[1px] border-black inline-block outline-none px-3 py-3 w-full input_field"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="relative">
            <input
              ref={passRef}
              className="border-[1px] border-black inline-block outline-none px-3 py-3 input_field w-full"
              type={isText ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {isText ? (
              <AiOutlineEyeInvisible
                onClick={handleShowPassword}
                className="absolute top-6 right-2 cursor-pointer"
              />
            ) : (
              <AiOutlineEye
                onClick={handleShowPassword}
                className="absolute top-6 right-2 cursor-pointer"
              />
            )}
            {error && (
              <span className="text-red-500 inline-block mt-2">
                Invalid email/password
              </span>
            )}
          </div>
          <button
            className="bg-[#a435f0] hover:bg-[#8810d8] pt-[2px]  w-full mt-3 text-white font-bold"
            type="submit"
          >
            Log in
          </button>
        </form>
        <div className="text-center my-2">
          <span className="font-normal mr-1">or</span>
          <Link className="font-bold text-sm underline text-[#a435f0]" to="#">
            Frogot Password
          </Link>
        </div>
        <hr />
        <div className="text-center">
          <span className="text-sm">
            {"Don't have an account? "}
            <Link
              className="font-semibold underline text-[#a435f0]"
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
