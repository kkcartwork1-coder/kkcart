// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // Attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.authorization = token;
//   }

//   return req;
// });

// export default API;


// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "https://kkcart-backend.onrender.com/api",
// });

// // Attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });

// export default API;

// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "https://kkcart-backend.onrender.com/api",
// // });

// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");

// //   if (token) {
// //     req.headers.Authorization = `Bearer ${token}`;
// //   }

// //   return req;
// // });

// // export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://kkcart-backend.onrender.com/api",
//   timeout: 15000,
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   req.headers["Content-Type"] = "application/json";

//   return req;
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api"
      : "https://kkcart-backend.onrender.com/api",

  timeout: 15000,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;