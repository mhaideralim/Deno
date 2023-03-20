import { config } from "https://deno.land/x/dotenv/mod.ts";
const { DATA_API_KEY, APP_ID } = config();

const BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/beta/action`;
const DATA_SOURCE = "Cluster0";
const DATABASE = "todo_db";
const COLLECTION = "todos";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};