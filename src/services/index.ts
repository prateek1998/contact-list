import axios from 'axios';

export const getData = async (limit: number = 20) => {
  const data: any = await axios.get('https://randomuser.me/api/?results=' + limit).catch((err) => {
    console.log(err);
  });
  if (data.data) {
    console.log(data.data);
    return data.data;
  }
};
