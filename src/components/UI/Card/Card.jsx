import Aos from "aos";
import { useContext, useEffect } from "react";

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
    <div className="border w-full shadow" data-aos="fade-up">
      <figure className="">
        <img
          loading="lazy"
          className="w-96 hover:scale-105 transition-all ease-in-out duration-500"
          src={
            "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="card_img"
        />
      </figure>
      <div className="px-4">
        <h1 className="text-md my-3 font-bold">{item?.name}</h1>
        <h2 className="text-xl mb-3">{item?.instrctorName}</h2>
        <div className="">
          <p className="text-sm mb-3">Price: ${item?.price}</p>
          <p className="text-sm mb-3">AvailableSeats: {item?.availableSeats}</p>
        </div>
      </div>
      <div className="px-4 mb-3">
        <button
          onClick={handleAddToCart}
          className="text-white text-sm px- py-[1px] capitalize bg-[#a435f0] hover:bg-[#8810d8] hover:scale-110"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
