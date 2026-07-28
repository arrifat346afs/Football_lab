import { integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'
import { competitions } from './competitions.ts'
import { seasons } from './seasons.ts'
import { teams } from './teams.ts'
import { stadiums } from './teams.ts'
import { referees } from './referees.ts'

export const matches = pgTable('matches', {
  id: serial().primaryKey(),
  apiId: integer('api_id').unique(),
  competitionId: integer('competition_id').notNull().references(() => competitions.id, { onDelete: 'cascade' }),
  seasonId: integer('season_id').notNull().references(() => seasons.id, { onDelete: 'cascade' }),
  homeTeamId: integer('home_team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  awayTeamId: integer('away_team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  stadiumId: integer('stadium_id').references(() => stadiums.id),
  kickoff: timestamp().notNull(),
  status: varchar({ length: 50 }).notNull().default('Scheduled'),
  minute: integer().default(0),
  homeScore: integer('home_score').default(0),
  awayScore: integer('away_score').default(0),
  attendance: integer(),
  refereeId: integer('referee_id').references(() => referees.id),
})
