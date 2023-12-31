import axios from "axios";
import Container from "../../../components/shared/Container";
import useFetch from "../../../hooks/useFetch";
import useCart from "../../../hooks/useCart";

const AllClasses = () => {
  const { refetch } = useCart();
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/courses"
  );

  const handleApprove = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/courses/${id}?status=approved`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  const handleDeny = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/courses/${id}?status=denied`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <Container>
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Course Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="shadow">
                <td>
                  <img
                    loading="lazy"
                    className="h-12"
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.availableSeats}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(item._id)}
                    className="btn btn-xs mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(item._id)}
                    className={`btn btn-xs   `}
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleDeny(item._id)}
                    className={`btn btn-xs ml-2 `}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllClasses;
