import axios from "axios";
import Router from "../router";

export default function setup() {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status === UNAUTHORIZED) {
        Router.push("/login");
      }
      return Promise.reject(error);
    }
  );
}
