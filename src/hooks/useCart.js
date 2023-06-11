import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://b7a12-summer-camp-server-side-jobayer981.vercel.app/cart?email=${user?.email}`
      );

      return res.data;
    },
  });
  return [data, refetch];
};

export default useCart;
