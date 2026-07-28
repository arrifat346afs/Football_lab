import { date, pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core'
import { players } from './players.ts'

export const injuries = pgTable('injuries', {
  id: serial().primaryKey(),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  type: varchar({ length: 255 }).notNull(),
  startDate: date('start_date').notNull(),
  expectedReturn: date('expected_return'),
  status: varchar({ length: 50 }).default('Out'),
})
