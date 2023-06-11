import Container from "../../../components/shared/Container";
import useFetch from "../../../hooks/useFetch";

const MyCourses = () => {
  // const [data] = useFetch("https://b7a12-summer-camp-server-side-jobayer981.vercel.app/payments");
  const data = [1, 2, 3, 4];
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-4 self-center content-center my-12">
        {data.map((item) => (
          <div
            key={item}
            className="p-4 hover:shadow-lg hover:border"
            data-aos="zoom-out"
          >
            <figure>
              <img
                loading="lazy"
                className="h-40 w-full"
                src="https://assets.dulwich.org/thumbs/schools/fit/472x256/wechat-image-20210902150627-20210922-151534-393.jpg"
                alt=""
              />
            </figure>
            <div className="px-6 my-4 flex flex-col gap-2">
              <h1>{item.name || "English for beginner"}</h1>
              <p>{item.instructorName || " Hiroshi Tanaka"}</p>
              <div className="mt-3">
                <p>Available Seat: {item.availableSeats || 20}</p>
                <p>Price: ${item.price || 45}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyCourses;
