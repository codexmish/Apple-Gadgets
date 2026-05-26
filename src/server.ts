import app from "./app";
import { dbConfig } from "./configs/dbConfig";

const main = () => {
  app.listen(8000, () => {
    dbConfig();
    console.log("server is running");
  });
};

main();
