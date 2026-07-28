import { boolean, integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { users } from './users.ts'

export const notificationSettings = pgTable('notification_settings', {
  id: serial().primaryKey(),
  userId: integer('user_id').notNull().unique().references(() => users.id, { onDelete: 'cascade' }),
  goals: boolean().default(true),
  kickoff: boolean().default(true),
  lineup: boolean().default(true),
  redCards: boolean('red_cards').default(true),
  penalties: boolean().default(true),
  injuries: boolean().default(true),
  transfers: boolean().default(true),
  news: boolean().default(true),
})
