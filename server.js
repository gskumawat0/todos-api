const app = require("./app");

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log("server is running on port : " + process.env.PORT);
});
