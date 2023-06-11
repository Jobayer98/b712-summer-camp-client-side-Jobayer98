import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/cart?email=${user?.email}`
      );

      return res.json();
    },
  });
  return [data, refetch];
};

export default useCart;
