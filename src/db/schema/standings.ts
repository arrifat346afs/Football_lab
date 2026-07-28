import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { competitions } from './competitions.ts'
import { seasons } from './seasons.ts'
import { teams } from './teams.ts'

export const standings = pgTable('standings', {
  id: serial().primaryKey(),
  competitionId: integer('competition_id').notNull().references(() => competitions.id, { onDelete: 'cascade' }),
  seasonId: integer('season_id').notNull().references(() => seasons.id, { onDelete: 'cascade' }),
  teamId: integer('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  position: integer().notNull(),
  played: integer().default(0),
  wins: integer().default(0),
  draws: integer().default(0),
  losses: integer().default(0),
  goalsFor: integer('goals_for').default(0),
  goalsAgainst: integer('goals_against').default(0),
  goalDifference: integer('goal_difference').default(0),
  points: integer().default(0),
})
