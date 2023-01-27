import axios from 'axios';
export const loginAuth = async (data) => {
    return await axios.post('http://localhost:3000/api/login',data,{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.data);
}

export const createAccountAuth = async (data) => {
  return await axios.post('http://localhost:3000/api/createAccount',data,{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.data);
}