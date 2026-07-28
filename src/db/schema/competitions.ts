import { boolean, integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'

export const competitions = pgTable('competitions', {
  id: serial().primaryKey(),
  apiId: integer('api_id').unique(),
  name: varchar({ length: 255 }).notNull(),
  country: varchar({ length: 100 }),
  logo: text(),
  type: varchar({ length: 50 }).notNull().default('League'),
  season: varchar({ length: 20 }),
  currentRound: integer('current_round'),
  isActive: boolean('is_active').default(true),
})
