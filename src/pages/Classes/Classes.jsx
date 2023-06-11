// import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Container from "../../components/shared/Container";
import useFetch from "../../hooks/useFetch";
import Aos from "aos";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import useCart from "../../hooks/useCart";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const notify = () => toast.success("Add to cart");

const Classes = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/allcourses"
  );
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const handleAddToCart = (item) => {
    const selectedClass = {
      classId: item._id,
      name: item.name,
      instructorName: item.instrctorName,
      availableSeats: item.availableSeats,
      price: item.price,
      email: user?.email,
    };

    if (user && user?.email) {
      axios
        .post(
          "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/cart",
          selectedClass
        )
        .then((res) => {
          refetch();
          if (res.data.insertedId) {
            notify();
          }
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 self-center content-center my-12">
        {data.map((item) => (
          <div
            key={item._id}
            className="p-4 hover:shadow-lg hover:border"
            data-aos="zoom-out"
          >
            <figure>
              <img
                loading="lazy"
                className="h-52 w-full hover:scale-110 transition-all ease-in-out duration-500"
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
              <button
                onClick={() => handleAddToCart(item)}
                className="text-white text-sm px- py-[1px] capitalize bg-[#a435f0] hover:bg-[#8810d8] hover:scale-110"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
