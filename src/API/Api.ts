import axios from "axios";

const Api = axios.create({
  baseURL: "https://nt.softly.uz/api",
});

export default Api;
