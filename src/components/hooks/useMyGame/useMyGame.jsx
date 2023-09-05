import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';



const useMyGame = () => {
  const token=localStorage.getItem('access-token')
    const{user}=useAuth()

    const { data: myGames = [], refetch } = useQuery({
        queryKey: ["mygames"],
        queryFn: async () => {
          const res = await fetch(`https://game-marketplace-server.vercel.app/mygames?email=${user?.email}`,  
{
        headers:{
          authorization:`bearer ${token}`
        }
      });
          return res.json();
        },
      });
    
      return [myGames, refetch];
}

export default useMyGame
