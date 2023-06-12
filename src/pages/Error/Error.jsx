import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" bg-white flex flex-col gap-5 justify-center items-center min-h-[80vh]">
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="animate-bounce">
          <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            4
          </span>
          <span className="mx-1 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            0
          </span>
          <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-700">
            4
          </span>
        </div>
        <h1 className="text-3xl animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-700">
          Page Not Found
        </h1>
        <Link
          to="/"
          className="border-2 px-3 py-1 drop-shadow-sm rounded-sm border-indigo-500 text-purple-600"
        >
          Go to Home
        </Link>
      </Fade>
    </div>
  );
};

export default ErrorPage;
