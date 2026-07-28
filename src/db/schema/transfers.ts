import { date, integer, pgTable, serial, doublePrecision } from 'drizzle-orm/pg-core'
import { players } from './players.ts'
import { teams } from './teams.ts'

export const transfers = pgTable('transfers', {
  id: serial().primaryKey(),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  fromTeamId: integer('from_team_id').references(() => teams.id, { onDelete: 'set null' }),
  toTeamId: integer('to_team_id').references(() => teams.id, { onDelete: 'set null' }),
  fee: doublePrecision(),
  date: date().notNull(),
})
