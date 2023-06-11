import Aos from "aos";
import { useContext, useEffect } from "react";

import "./Card.css";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import useCart from "../../../hooks/useCart";

const notify = () => toast.success("Add to cart");

const Card = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

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
      email: user.email,
    };
    axios.post("http://localhost:3000/cart", selectedClass).then((res) => {
      refetch();
      if (res.data.insertedId) {
        notify();
      }
    });
  };
  return (
    <div className="border w-full shadow" data-aos="fade-up">
      <figure className="img flex justify-center">
        <img loading="lazy" className="w-96" src={item?.image} alt="card_img" />
      </figure>
      <div className="px-4">
        <h1 className="text-xl my-3">{item?.name}</h1>
        <h2 className="text-xl mb-3">{item?.instrctorName}</h2>
        <div className="flex gap-16">
          <p className="text-md mb-3">Price: ${item?.price}</p>
          <p className="text-sm mb-3">AvailableSeats: {item?.availableSeats}</p>
        </div>
      </div>
      <div className="px-4 mb-3">
        <button
          onClick={handleAddToCart}
          className="bg-[#8a18d6] text-white px-3 py-[1px]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
