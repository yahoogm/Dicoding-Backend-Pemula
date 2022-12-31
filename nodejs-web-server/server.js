// * import core module http
const http = require("http");

// * function to listen the request and make response
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  // * destructure method from request
  const { method, url } = request;

  // validation url & output
  if (url === "/") {
    if (method === "GET") {
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("<h1>Hallo, ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.end("<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>");
    }
  } else {
    response.end("<h1>Halaman tidak ditemukan</h1>");
  }
};

// * create server
const server = http.createServer(requestListener);

// * create port and host
const port = 5000;
const host = "localhost";

// * add instace to listen the server
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
