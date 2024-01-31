import { Database } from "bun:sqlite";

export function initDB() {
  const db = new Database('db/db.sqlite');
}