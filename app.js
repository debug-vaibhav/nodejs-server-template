const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

app.use(express.json());

app.use("/", indexRouter);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;
