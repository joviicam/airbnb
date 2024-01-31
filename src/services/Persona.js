import axios from 'axios';

let API_URL = 'http://localhost:8080/api/personas/page';


const obtenerPersonasPaginadas = async (pageNum, size, sort) => {
    const page = {
       page: pageNum,
       size, sort
    };
    console.log("page: ", page);
    const response = await axios.post(API_URL, { page });
    console.log("response: ", response);
    return response.data;
 };
 
 

export default {
   obtenerPersonasPaginadas
};