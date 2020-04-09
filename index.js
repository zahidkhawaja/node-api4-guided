require('dotenv').config();
const server = require("./api/server.js");

// Make the port dynamic, so Heroku can assign one
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n Server running on http://localhost:${port} \n`);
});
