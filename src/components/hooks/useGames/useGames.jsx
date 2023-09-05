import { useQuery } from '@tanstack/react-query';


const useGames = () => {
  
    const { data: games = [], refetch } = useQuery({
        queryKey: ["games"],
        queryFn: async () => {
          const res = await fetch(`https://game-marketplace-server.vercel.app/games`);
          return res.json();
        },
      });
    
      return [games, refetch];
}

export default useGames
