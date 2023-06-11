import useFetch from "../../hooks/useFetch";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";

const Instructor = () => {
  const [data] = useFetch("http://localhost:3000/instructors");

  return (
    <Container>
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class Taken</th>
              <th>Class Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>
                  <img loading="lazy" src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.classesTaken}</td>
                <td>{item.classNames.length}</td>
                <td>
                  <Link>See Classes</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Instructor;
