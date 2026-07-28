import { boolean, date, integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { competitions } from './competitions.ts'

export const seasons = pgTable('seasons', {
  id: serial().primaryKey(),
  competitionId: integer('competition_id').notNull().references(() => competitions.id, { onDelete: 'cascade' }),
  year: integer().notNull(),
  startDate: date('start_date'),
  endDate: date('end_date'),
  current: boolean().default(false),
})
