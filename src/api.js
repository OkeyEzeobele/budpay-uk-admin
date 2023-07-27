import axios from "axios";

const baseURL = "http://localhost:5100";
// const baseURL = "https://budpay-mobile-app-v2-api-dev.budpay-cluster-dev.com"

export default axios.create({ baseURL });
