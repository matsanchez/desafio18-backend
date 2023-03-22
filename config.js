import dotenv from "dotenv";
dotenv.config();

export default {
  app: {
    persistence: process.env.MOD_PERSISTENCE,
  },
  mongo: {
    url: process.env.MONGO_URI,
  },
};
