import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => "Hello Elysia!")
  .get("/users", async () => {
    try {
      return await db.select().from(users);
    } catch (e) {
      return { error: "Database connection failed. Make sure MySQL is running." };
    }
  })
  .listen(process.env.PORT || 3000);

console.log(
  `🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`
);
