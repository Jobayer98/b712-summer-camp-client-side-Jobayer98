import useFetch from "../../../hooks/useFetch";
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";
import Container from "../../../components/shared/Container";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [data] = useFetch(
    `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/payments-history?email=${user?.email}`
  );
  return (
    <Container>
      <div className="overflow-x-auto my-12">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="shadow">
                <td>{i + 1}</td>
                <td>{item.date}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PaymentHistory;
