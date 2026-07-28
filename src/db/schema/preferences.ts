import { boolean, doublePrecision, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'
import { users } from './users.ts'
import { matches } from './matches.ts'
import { players } from './players.ts'
import { competitions } from './competitions.ts'
import { seasons } from './seasons.ts'

export const userPreferences = pgTable('user_preferences', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().unique().references(() => users.id, { onDelete: 'cascade' }),
  theme: varchar({ length: 20 }).default('system'),
  language: varchar({ length: 10 }).default('en'),
  timezone: varchar({ length: 50 }),
  favoriteCompetition: integer('favorite_competition').references(() => competitions.id, { onDelete: 'set null' }),
  homeScreen: varchar('home_screen', { length: 50 }).default('live'),
  liveOnly: boolean('live_only').default(false),
})

export const searchHistory = pgTable('search_history', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  query: varchar({ length: 500 }).notNull(),
  searchedAt: timestamp('searched_at').defaultNow(),
})

export const recentlyViewed = pgTable('recently_viewed', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  entityType: varchar('entity_type', { length: 50 }).notNull(),
  entityId: integer('entity_id').notNull(),
  viewedAt: timestamp('viewed_at').defaultNow(),
})

export const watchlist = pgTable('watchlist', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
})

export const predictions = pgTable('predictions', {
  id: serial().primaryKey(),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  homeWin: doublePrecision('home_win'),
  draw: doublePrecision(),
  awayWin: doublePrecision('away_win'),
  expectedGoals: doublePrecision('expected_goals'),
  confidence: doublePrecision(),
})

export const odds = pgTable('odds', {
  id: serial().primaryKey(),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  homeWin: doublePrecision('home_win'),
  draw: doublePrecision(),
  awayWin: doublePrecision('away_win'),
  bookmaker: varchar({ length: 100 }),
})

export const playerRatings = pgTable('player_ratings', {
  id: serial().primaryKey(),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  matchId: integer('match_id').notNull().references(() => matches.id, { onDelete: 'cascade' }),
  rating: doublePrecision(),
  manOfTheMatch: boolean('man_of_the_match').default(false),
})

export const awards = pgTable('awards', {
  id: serial().primaryKey(),
  playerId: integer('player_id').notNull().references(() => players.id, { onDelete: 'cascade' }),
  seasonId: integer('season_id').notNull().references(() => seasons.id, { onDelete: 'cascade' }),
  award: varchar({ length: 255 }).notNull(),
  date: timestamp().defaultNow(),
})
