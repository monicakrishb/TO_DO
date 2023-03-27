import axios from "axios";
class HttpService {
  environment = process.env.REACT_APP_ENV;
  registerpost = async(obj) => {
    return  await axios.post(this.environment + "/user",obj);
  };
  loginget = (email) => {
    return axios.get(this.environment + `/user?email=${email}`);
  };
   Data = async() => { 
    const response=await axios.get(`${this.environment }/task`);
    const data=response.data
    console.log(data);
   return data
  // console.log(response.data);
};
}

 

const service = new HttpService();
export default service;
