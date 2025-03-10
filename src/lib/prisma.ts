import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client
// create a Prisma Client instance in a singleton pattern
//leads to database conncetion exhaustion 





// EXPLANATION => 

// Multiple Database Connections Explained
// When we talk about multiple database connections, we refer to the creation of separate connections between your application (or service) and the database. Each time your application needs to communicate with the database (e.g., to fetch or update data), it opens a new connection to the database server.

// Why Multiple Connections Matter:
// Concurrency: If multiple parts of your application need to access the database at the same time, each part might create its own database connection. For example, if two different users are interacting with your app at the same time, they may each trigger different database queries, leading to multiple database connections.

// Connection Pooling: Databases generally support connection pooling, which means instead of opening a new connection every time, the database server keeps a set of open connections that can be reused by multiple clients. However, too many open connections can exhaust the connection pool and lead to performance degradation or failures.