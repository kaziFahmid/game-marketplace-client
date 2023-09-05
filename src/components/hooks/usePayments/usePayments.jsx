

import useAuth from '../useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const usePayments = () => {
  const token=localStorage.getItem('access-token')
const {user}=useAuth()

    const { data: payments = [], refetch } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
          const res = await fetch(`https://game-marketplace-server.vercel.app/payments?email=${user?.email}`,   
 {
                  headers:{
                    authorization:`bearer ${token}`
                  }
                });
        
              
          return res.json();
        },
      });
    
      return [payments, refetch];
}

export default usePayments
