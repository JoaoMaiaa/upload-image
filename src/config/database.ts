import { MongoClient, Db } from "mongodb";

let cachedDb: Db;

export async function connect(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = new MongoClient(uri);
  const dbName = "uploads";
  const db = client.db(dbName);
  cachedDb = db;
  return db;
}
