import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const referees = pgTable('referees', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  country: varchar({ length: 100 }),
  photo: text(),
})
