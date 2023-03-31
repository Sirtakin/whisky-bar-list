import axios from "axios";

export default axios.create({
  baseURL: "https://apis.vinmonopolet.no/products/v0",
  params: { key: "54607ca0515346c5bc215ddb810448a4" },
});
