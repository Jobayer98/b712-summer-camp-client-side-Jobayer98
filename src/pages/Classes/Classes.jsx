// import { Link } from "react-router-dom";
import { useEffect } from "react";
import Container from "../../components/shared/Container";
import useFetch from "../../hooks/useFetch";
import Aos from "aos";

const Classes = () => {
  const [data] = useFetch("http://localhost:3000/classes");

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 self-center content-center my-12">
        {data.map((item) => (
          <div
            key={item._id}
            className="p-4 hover:shadow-lg hover:border"
            data-aos="zoom-out"
          >
            <figure>
              <img
                loading="lazy"
                className="h-60 w-full"
                src="https://assets.dulwich.org/thumbs/schools/fit/472x256/wechat-image-20210902150627-20210922-151534-393.jpg"
                alt=""
              />
            </figure>
            <div className="px-6 my-4 flex flex-col gap-2">
              <h1>{item.name}</h1>
              <p>Instructor name: {item.instructorName}</p>
              <div className="mt-3">
                <p>Available Seat: {item.availableSeats}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
            <div className="text-center">
              <button className="border-[1px] border-orange-700 text-orange-700 px-4 py-2 rounded text-sm">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
