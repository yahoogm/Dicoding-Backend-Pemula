// * import core module http
const http = require("http");

// * function to listen the request and make response
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  // * destructure method from request
  const { method } = request;

  // * validation response
  if (method === "GET") {
    response.end("<h1>Helo!</h1>");
  }

  if (method === "POST") {
    response.end("<h1>Hai!</h1>");
  }

  if (method === "PUT") {
    response.end("<h1>Bonjour!</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Salam!</h1>");
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
