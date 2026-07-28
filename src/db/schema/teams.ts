import { integer, pgTable, serial, text, varchar, doublePrecision } from 'drizzle-orm/pg-core'

export const stadiums = pgTable('stadiums', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  capacity: integer(),
  city: varchar({ length: 100 }),
  country: varchar({ length: 100 }),
  latitude: doublePrecision(),
  longitude: doublePrecision(),
  image: text(),
})

export const coaches = pgTable('coaches', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  country: varchar({ length: 100 }),
  age: integer(),
  photo: text(),
})

export const teams = pgTable('teams', {
  id: serial().primaryKey(),
  apiId: integer('api_id').unique(),
  name: varchar({ length: 255 }).notNull(),
  shortName: varchar('short_name', { length: 50 }),
  country: varchar({ length: 100 }),
  city: varchar({ length: 100 }),
  stadiumId: integer('stadium_id').references(() => stadiums.id),
  logo: text(),
  founded: integer(),
  coachId: integer('coach_id').references(() => coaches.id),
})
