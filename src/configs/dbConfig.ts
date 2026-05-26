import mongoose from "mongoose";
import config from "../helpers/processEnv";

export const dbConfig = () => {
  mongoose
    .connect(config.DB_URL)
    .then(() => console.log("Connected!"));
};

