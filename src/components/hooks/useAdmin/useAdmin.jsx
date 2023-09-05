import useAuth from "../useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://game-marketplace-server.vercel.app/allusers/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
