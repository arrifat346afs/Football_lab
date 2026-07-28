import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { users } from './users.ts'
import { teams } from './teams.ts'
import { players } from './players.ts'
import { competitions } from './competitions.ts'
import { matches } from './matches.ts'

export const favoriteTeams = pgTable('favorite_teams', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  teamId: integer('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
})

export const favoritePlayers = pgTable('favorite_players', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
})

export const favoriteCompetitions = pgTable('favorite_competitions', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  competitionId: integer('competition_id').notNull().references(() => competitions.id, { onDelete: 'cascade' }),
})

export const favoriteMatches = pgTable('favorite_matches', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
})
