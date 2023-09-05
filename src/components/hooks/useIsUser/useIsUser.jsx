
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const useIsUser = () => {
    const {user}=useAuth()
    const navigate=useNavigate()
   
const token=localStorage.getItem('access-token')
    const { data: isUser = [],isLoading:isUserLoading} = useQuery({
        queryKey: ['isUser',user?.email],
        queryFn: async () => {
          const res = await fetch(`https://game-marketplace-server.vercel.app/allusers/user/${user?.email}`,{
            headers:{
              authorization:`bearer ${token}`
            }
          });
          if(!res.ok){
            navigate('/')
          }
          return res.json();
        },
      });



  return [isUser,isUserLoading]
}

export default useIsUser
