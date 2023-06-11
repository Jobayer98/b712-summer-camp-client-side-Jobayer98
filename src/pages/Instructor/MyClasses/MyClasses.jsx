import { Link } from "react-router-dom";
import Container from "../../../components/shared/Container";
import useFetch from "../../../hooks/useFetch";
// import { motion } from "framer-motion";

const MyClasses = () => {
  const [data] = useFetch(
    "http://localhost:3000/myclasses?email=alice@gmail.com"
  );
  return (
    <Container>
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Course Name</th>
              <th>Class Taken</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
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
                  <Link to={`/myclasses/${item._id}`}>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyClasses;
