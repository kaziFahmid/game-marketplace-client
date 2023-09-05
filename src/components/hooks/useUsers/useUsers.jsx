

import { useQuery } from "@tanstack/react-query";


export default function useUsers() {
      const token=localStorage.getItem('access-token')
     
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch(`https://game-marketplace-server.vercel.app/allusers`,{
        headers:{
          authorization:`bearer ${token}`
        }
      });
    
      return res.json();
    },
  });

  return [users, refetch];
}
