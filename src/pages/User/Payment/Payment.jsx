import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Payment = () => {
  const [data] = useCart();
  const totalPrice = data.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );
  return (
    <div>
      <p className="font-bold text-gray-600 tracking-wider">Total:</p>
      <h1 className="text-3xl font-extrabold my-1 mb-4">${totalPrice}</h1>
      {totalPrice > 0 ? (
        <Link
          to="/checkout"
          className="bg-[#a435f0] hover:bg-[#8810d8] text-white font-bold py-3 w-full mt-2 px-8"
        >
          Checkout
        </Link>
      ) : (
        "The cart is empty"
      )}
    </div>
  );
};

export default Payment;
