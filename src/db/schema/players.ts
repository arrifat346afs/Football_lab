import { date, integer, pgTable, serial, text, varchar, doublePrecision } from 'drizzle-orm/pg-core'
import { teams } from './teams.ts'

export const players = pgTable('players', {
  id: serial().primaryKey(),
  apiId: integer('api_id').unique(),
  teamId: integer('team_id').references(() => teams.id, { onDelete: 'set null' }),
  firstName: varchar('first_name', { length: 100 }),
  lastName: varchar('last_name', { length: 100 }),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  birthDate: date('birth_date'),
  age: integer(),
  country: varchar({ length: 100 }),
  nationality: varchar({ length: 100 }),
  height: integer(),
  weight: integer(),
  preferredFoot: varchar('preferred_foot', { length: 20 }),
  position: varchar({ length: 50 }),
  shirtNumber: integer('shirt_number'),
  photo: text(),
  marketValue: doublePrecision('market_value'),
  contractUntil: date('contract_until'),
})
