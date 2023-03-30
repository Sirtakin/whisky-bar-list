import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "1a6bc22bb9f64a0a898c9a2767d2ea60" },
});
