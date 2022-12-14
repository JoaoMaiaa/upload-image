import { connect } from "../config/database";
import dotenv from "dotenv";

dotenv.config();

export const uploadService = {
  getPath: async () => {
    const db = await connect(`${process.env.MONGODB_URL}`);
    const collection = db.collection("userUpload");

    return collection.find({}).toArray();
  },

  upload: async (path: string) => {
    const db = await connect(`${process.env.MONGODB_URL}`);
    const collection = db.collection("userUpload");

    return await collection.insertOne({
      ok: true,
      file: path,
      date: new Date(),
    });
  },
};
