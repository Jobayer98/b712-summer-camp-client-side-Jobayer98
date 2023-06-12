import Aos from "aos";
import { useContext, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

import "./Card.css";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const notify = () => toast.success("Add to cart");

const Card = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleAddToCart = () => {
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
    <div
      className="w-full drop-shadow-md bg-white rounded-lg overflow-clip"
      data-aos="fade-up"
    >
      <div className="relative">
        <figure className="">
          <img
            loading="lazy"
            className="w-96 hover:scale-105 transition-all ease-in-out duration-500"
            src={
              "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt="card_img"
          />
          <img
            className="h-10 w-10 rounded-full ring ring-gray-200 border-[1px] absolute -bottom-5 left-6"
            src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </figure>
      </div>
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center">
          <p className="text-xs text-purple-700">
            {item?.instrctorName || "Instructor"}
          </p>
          <p className="text-sm mb-2 flex gap-1 items-center">
            <FaUserAlt className="text-purple-700" />
            {item?.availableSeats}
          </p>
        </div>

        <h1 className="text-md my-3 font-bold">{item?.name}</h1>
        <p className="text-sm mb-2 font-bold">${item?.price}</p>
      </div>
      <div
        onClick={handleAddToCart}
        className="px-4 text-sm font-bold  hover:bg-purple-700 transition-all duration-500 hover:text-white text-center py-2 cursor-pointer capitalize"
      >
        Add to cart
      </div>
    </div>
  );
};

export default Card;
