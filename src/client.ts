import axios from "axios";

const rc = axios.create({
  baseURL: "http://localhost:5572",
});

export default rc;
