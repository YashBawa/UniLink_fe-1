// const baseURL = "https://hostelite-api.herokuapp.com/";
const baseURL = "http://127.0.0.1:8000/";

// main request function
const request = async (method = "GET", data = {}, endpoint) => {
  let url;
  let payload;

  if (method === "GET") {
    const requestParams = data
      ? `?${Object.keys(data)
          .map((key) => `${key}=${data[key]}`)
          .join("&")}`
      : "";
    url = `${baseURL}${endpoint}${requestParams}`;
    payload = "";
  } else {
    url = `${baseURL}${endpoint}`;
    payload = data ? JSON.stringify(data) : "";
  }

  // Token Authentication
  const token = localStorage.getItem("token");
  const auth = token ? "Token " + localStorage.getItem("token") : "";

  try {
    const response = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: method !== "GET" ? payload : null,
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const errorJson = await response.json();
      throw Error(errorJson);
    }
  } catch (error) {
    return error;
  }
};

export const login = async (username, password) => {
  const data = { username: username, password: password };
  return request("POST", data, "api-token-auth/");
};

export const signup = async (username, password) => {
  const data = { username: username, password: password };
  return request("POST", data, "user/");
};

export const me = async () => {
  return request("GET", {}, "api/user/");
};

export const allUsers = async () => {
  return request("GET", {}, "user/");
};

export const createHealthReport = async (id, description) => {
  const data = { reportee: id, repotrer: 1, description: description };
  return request("POST", data, "health/");
};
