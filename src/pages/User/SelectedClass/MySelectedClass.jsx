import Container from "../../../components/shared/Container";
import Payment from "../Payment/Payment";

const MySelectedClass = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <h1 className="text-4xl font-extrabold my-8">My Selected Course</h1>
      <p className="font-semibold mb-1">7 courses in Cart</p>
      <div className=" flex justify-center gap-6">
        <div className="w-[70%]">
          {data.map((item) => (
            <>
              <hr />
              <div
                key={item}
                className="p-4 hover:shadow-lg hover:border flex justify-center"
                data-aos="fade-right"
              >
                <figure>
                  <img
                    className="h-32 w-full"
                    src="https://assets.dulwich.org/thumbs/schools/fit/472x256/wechat-image-20210902150627-20210922-151534-393.jpg"
                    alt=""
                  />
                </figure>
                <div className="px-6 my-4 flex flex-col gap-1 items-start">
                  <h1 className="font-bold">
                    {item.name || "English for beginner"}
                  </h1>
                  <p className="font-normal text-gray-500">
                    {item.instructorName || " Hiroshi Tanaka"}
                  </p>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      Available Seat: {item.availableSeats || 20}
                    </p>
                  </div>
                  <button className="text-xs mt-3 text-[#8732c0] border px-3 py-1 hover:border-[#8732c0]">
                    Remove
                  </button>
                </div>
                <p className="mt-4 ml-12 font-semibold tracking-wide text-[#a435f0] content-end">
                  ${item.price || 45}
                </p>
              </div>
            </>
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
