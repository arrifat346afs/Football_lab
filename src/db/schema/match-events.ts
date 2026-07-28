import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { matches } from './matches.ts'
import { players } from './players.ts'
import { teams } from './teams.ts'

export const matchEvents = pgTable('match_events', {
  id: serial().primaryKey(),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  minute: integer().notNull(),
  type: varchar({ length: 50 }).notNull(),
  playerId: integer('player_id').references(() => players.id, { onDelete: 'set null' }),
  assistPlayerId: integer('assist_player_id').references(() => players.id, { onDelete: 'set null' }),
  teamId: integer('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  description: text(),
})
