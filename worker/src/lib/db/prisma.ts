import { PrismaD1 } from "@prisma/adapter-d1"
import { PrismaClient } from "../../generated/prisma/client"
import { env } from "cloudflare:workers"

export const db = new PrismaClient({ adapter: new PrismaD1(env.DB) })
