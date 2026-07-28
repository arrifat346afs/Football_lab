import { doublePrecision, integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { players } from './players.ts'
import { seasons } from './seasons.ts'
import { teams } from './teams.ts'
import { matches } from './matches.ts'

export const playerStats = pgTable('player_stats', {
  id: serial().primaryKey(),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  seasonId: integer('season_id').notNull().references(() => seasons.id, { onDelete: 'cascade' }),
  matchesPlayed: integer('matches_played').default(0),
  minutes: integer().default(0),
  goals: integer().default(0),
  assists: integer().default(0),
  shots: integer().default(0),
  shotsOnTarget: integer('shots_on_target').default(0),
  passes: integer().default(0),
  passAccuracy: doublePrecision('pass_accuracy'),
  yellowCards: integer('yellow_cards').default(0),
  redCards: integer('red_cards').default(0),
  rating: doublePrecision(),
  xG: doublePrecision('xg'),
  xA: doublePrecision('xa'),
  cleanSheets: integer('clean_sheets').default(0),
  saves: integer().default(0),
  tackles: integer().default(0),
  interceptions: integer().default(0),
  dribbles: integer().default(0),
})

export const teamStats = pgTable('team_stats', {
  id: serial().primaryKey(),
  teamId: integer('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  seasonId: integer('season_id').notNull().references(() => seasons.id, { onDelete: 'cascade' }),
  wins: integer().default(0),
  draws: integer().default(0),
  losses: integer().default(0),
  goalsFor: integer('goals_for').default(0),
  goalsAgainst: integer('goals_against').default(0),
  cleanSheets: integer('clean_sheets').default(0),
  xG: doublePrecision('xg'),
  xGA: doublePrecision('xga'),
  possession: doublePrecision(),
  passAccuracy: doublePrecision('pass_accuracy'),
  shots: integer().default(0),
  shotsOnTarget: integer('shots_on_target').default(0),
})

export const liveMatchStats = pgTable('live_match_stats', {
  id: serial().primaryKey(),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  possession: doublePrecision(),
  shots: integer().default(0),
  shotsOnTarget: integer('shots_on_target').default(0),
  corners: integer().default(0),
  offsides: integer().default(0),
  yellowCards: integer('yellow_cards').default(0),
  redCards: integer('red_cards').default(0),
  passes: integer().default(0),
  passAccuracy: doublePrecision('pass_accuracy'),
  fouls: integer().default(0),
  xG: doublePrecision('xg'),
})
