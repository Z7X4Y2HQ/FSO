import axios from "axios";

const URL = "http://localhost:3001/api/persons";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

const create = (newobject) => {
  const request = axios.post(URL, newobject);
  return request.then((response) => response.data);
};

export default { getAll, create };
