
import mongoose from "mongoose";
import { config } from "dotenv";
import { version } from "../package.json";

config();

export const globalConfig = {
    ENVIROMENT: process.env.ENVIROMENT || "develop",
    MONGO_URI: process.env.MONGO_URI || "http://localhost",
    PORT: process.env.PORT || 3001,
    APP_VERSION: version,
}

export const mongoConfig = async () => {
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true)
    if(globalConfig.ENVIROMENT === "develop") mongoose.set('debug', true);
    await mongoose.connect(globalConfig.MONGO_URI, { useNewUrlParser: true });
}