import { boolean, integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { matches } from './matches.ts'
import { teams } from './teams.ts'
import { players } from './players.ts'

export const lineups = pgTable('lineups', {
  id: serial().primaryKey(),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  teamId: integer('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  formation: varchar({ length: 20 }),
})

export const lineupPlayers = pgTable('lineup_players', {
  id: serial().primaryKey(),
  lineupId: integer('lineup_id').notNull().references(() => lineups.id, { onDelete: 'cascade' }),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  position: varchar({ length: 20 }),
  isCaptain: boolean('is_captain').default(false),
  starter: boolean().default(true),
})
