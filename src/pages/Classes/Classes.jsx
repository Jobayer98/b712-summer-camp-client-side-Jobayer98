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
  const [data] = useFetch("http://localhost:3000/allcourses");
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
      axios.post("http://localhost:3000/cart", selectedClass).then((res) => {
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
              <button
                onClick={() => handleAddToCart(item)}
                className="border-[1px] text-white px-4 py-2 rounded text-sm"
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
