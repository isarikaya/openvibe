import { Hono } from "hono"
import { auth } from "./lib/auth";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.use(
  "*",
  cors({
    origin: process.env.CLIENT_URL as string,
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
)

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/health", (c) =>
  c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }),
)

const apiV1 = app.basePath("/api/v1")

apiV1.get("/users", (c) => c.json({ data: [{ id: 1, name: "İbrahim Sarıkaya" }] }))

export default app
