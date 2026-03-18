import { Hono } from "hono"

const app = new Hono<{ Bindings: CloudflareBindings }>()

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
