import { PRIMARY_SERVER } from "../constants/serverUrls";

const getData = route => {
  const requestUrl = PRIMARY_SERVER + route;

  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("GET", requestUrl, true);
    req.onload = function() {
      if (this.status === 200) {
        const jsonResponse = req.response;
        resolve(jsonResponse);
      } else {
        reject(req.response);
      }
    };
    req.send(null);
  });
};

export default getData;
