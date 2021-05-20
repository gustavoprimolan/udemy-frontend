import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -0bVmmSgsQzlu_V6QQ_PCRwECsEYcIFm2k8oyMVLe3o",
  },
});
