import axios, { AxiosResponse } from "axios";

export const getTodoLists = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response: AxiosResponse) => response.data);
};
