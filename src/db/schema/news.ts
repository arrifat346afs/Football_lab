import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'
import { competitions } from './competitions.ts'
import { teams } from './teams.ts'
import { players } from './players.ts'

export const news = pgTable('news', {
  id: serial().primaryKey(),
  title: varchar({ length: 500 }).notNull(),
  description: text(),
  image: text(),
  source: varchar({ length: 255 }),
  publishedAt: timestamp('published_at').defaultNow(),
  competitionId: integer('competition_id').references(() => competitions.id, { onDelete: 'set null' }),
  teamId: integer('team_id').references(() => teams.id, { onDelete: 'set null' }),
  playerId: integer('player_id').references(() => players.id, { onDelete: 'set null' }),
})
