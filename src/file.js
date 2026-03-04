const http = require('http');
require('dotenv').config();
const port=process.env.PORT|| 8080;
const server = http.createServer((req, res) => {
  res.end('Hello from the Docker container!');
});

// This keeps the process "busy" listening for requests
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});