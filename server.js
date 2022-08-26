const app = require("./app");
const connectDB = require("./config/db.config");

const port = process.env.PORT || 5050; // this makes sure that the application runs on any port declared in the .env or use port 5050

connectDB();

app.listen(port, () => {
  console.log(`Server is listening on port ${PORT}....`);
});
