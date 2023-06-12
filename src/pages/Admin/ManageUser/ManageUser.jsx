import axios from "axios";
import Container from "../../../components/shared/Container";
import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

const ManageUser = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981.vercel.app0/users"
  );

  return (
    <Container>
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ManageUser;

const TableRow = ({ item }) => {
  const [disabled, setDisable] = useState(false);
  const [admin, setAdmin] = useState(false);
  //   let role = item.role;
  const handleInstructor = (id) => {
    item.role = "instructor";
    setDisable(true);
    setAdmin(false);
    axios.patch(
      `https://b7a12-summer-camp-server-side-jobayer981.vercel.app0/users/${id}?role=instructor`
    );
  };
  const handleAdmin = (id) => {
    item.role = "admin";
    setDisable(false);
    setAdmin(true);
    axios.patch(
      `https://b7a12-summer-camp-server-side-jobayer981.vercel.app0/users/${id}?role=admin`
    );
  };
  return (
    <tr className="shadow">
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td className="flex gap-3 ">
        <span
          onClick={() => handleInstructor(item._id)}
          disabled={disabled || item.role === "instructor" ? true : false}
          className="btn btn-sm bg-purple-700 text-white hover:bg-purple-500 hover:scale-105 capitalize"
        >
          Make Instructor
        </span>
        <span
          onClick={() => handleAdmin(item._id)}
          disabled={admin || item.role === "admin" ? true : false}
          className="btn btn-sm bg-purple-700 text-white hover:bg-purple-500 hover:scale-105 capitalize"
        >
          Make Admin
        </span>
      </td>
    </tr>
  );
};
