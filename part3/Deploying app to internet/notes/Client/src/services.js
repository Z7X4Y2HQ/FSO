import axios from "axios";

const URL = "/api/notes";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(URL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${URL}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
