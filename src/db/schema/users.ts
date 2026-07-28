import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial().primaryKey(),
  username: varchar({ length: 100 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  avatar: text(),
  country: varchar({ length: 100 }),
  timezone: varchar({ length: 50 }),
  language: varchar({ length: 10 }).default('en'),
  createdAt: timestamp('created_at').defaultNow(),
})
