const express = require("express");
const app = express();
const PORT = 2000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const startServer = () => {
  app.listen(PORT, () => {
    console.log("Server running");
  });
};

startServer();

// Watch for changes in the current file
require('fs').watchFile(__filename, () => {
  console.log('Server file changed, restarting...');
  process.exit();
});