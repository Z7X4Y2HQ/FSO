import axios from "axios";

const URL = "https://shielded-forest-78991.herokuapp.com/api/persons";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

const create = (newobject) => {
  const request = axios.post(URL, newobject);
  return request.then((response) => response.data);
};

export default { getAll, create };
