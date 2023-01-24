import axios from 'axios';
export const getGames = async () => {
    return await axios.get('http://localhost:3000/api/games').then(res => res.data);
}

export const addGames = async (data) => {
    return await axios.post('http://localhost:3000/api/games/add',data,{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.data);
}