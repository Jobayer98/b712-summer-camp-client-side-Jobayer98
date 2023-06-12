import Container from "../../../components/shared/Container";
import Payment from "../Payment/Payment";
import useCart from "../../../hooks/useCart";
import axios from "axios";
import { toast } from "react-hot-toast";

const notify = () => toast.success("Remove from cart");

const MySelectedClass = () => {
  const [data, refetch] = useCart();

  const handlRemoveFromCart = (id) => {
    axios
      .delete(
        `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/cart/${id}`
      )
      .then((res) => {
        if (res.data.deletedCount > 0) {
          notify();
          refetch();
        }
      });
  };
  return (
    <Container>
      <div className="lg:ml-32">
        <h1 className="text-4xl font-extrabold my-8">My Selected Course</h1>
        <p className="font-semibold mb-1">{data.length} courses in Cart</p>
      </div>
      <div className=" flex justify-center gap-6">
        <div className="w-[70%] lg:w-[50%]">
          {data.map((item) => (
            <div key={item._id}>
              <hr />
              <div
                className="p-4 hover:shadow-lg hover:border flex justify-start"
                data-aos="fade-right"
              >
                <figure>
                  <img
                    loading="lazy"
                    className="h-32 w-full"
                    src={item.image}
                  />
                </figure>
                <div className="px-6 my-4 flex flex-col gap-1 items-start">
                  <h1 className="font-bold">{item.name}</h1>
                  <p className="font-normal text-gray-500">
                    {item.instructorName}
                  </p>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      Available Seat: {item.availableSeats}
                    </p>
                  </div>
                  <button
                    onClick={() => handlRemoveFromCart(item._id)}
                    className="text-xs mt-3 bg-white text-[#8732c0] border px-3 py-1 hover:border-[#8732c0] hover:bg-transparent hover:text-purple-600"
                  >
                    Remove
                  </button>
                </div>
                <p className="mt-4 ml-12 font-semibold tracking-wide text-[#a435f0] content-end">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[30%]">
          <Payment />
        </div>
      </div>
    </Container>
  );
};

export default MySelectedClass;
