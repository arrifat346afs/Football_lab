CREATE TABLE "competitions" (
	"id" serial PRIMARY KEY NOT NULL,
	"api_id" integer,
	"name" varchar(255) NOT NULL,
	"country" varchar(100),
	"logo" text,
	"type" varchar(50) DEFAULT 'League' NOT NULL,
	"season" varchar(20),
	"current_round" integer,
	"is_active" boolean DEFAULT true,
	CONSTRAINT "competitions_api_id_unique" UNIQUE("api_id")
);
--> statement-breakpoint
CREATE TABLE "seasons" (
	"id" serial PRIMARY KEY NOT NULL,
	"competition_id" integer NOT NULL,
	"year" integer NOT NULL,
	"start_date" date,
	"end_date" date,
	"current" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "coaches" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"country" varchar(100),
	"age" integer,
	"photo" text
);
--> statement-breakpoint
CREATE TABLE "stadiums" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"capacity" integer,
	"city" varchar(100),
	"country" varchar(100),
	"latitude" double precision,
	"longitude" double precision,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"api_id" integer,
	"name" varchar(255) NOT NULL,
	"short_name" varchar(50),
	"country" varchar(100),
	"city" varchar(100),
	"stadium_id" integer,
	"logo" text,
	"founded" integer,
	"coach_id" integer,
	CONSTRAINT "teams_api_id_unique" UNIQUE("api_id")
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"api_id" integer,
	"team_id" integer,
	"first_name" varchar(100),
	"last_name" varchar(100),
	"full_name" varchar(255) NOT NULL,
	"birth_date" date,
	"age" integer,
	"country" varchar(100),
	"nationality" varchar(100),
	"height" integer,
	"weight" integer,
	"preferred_foot" varchar(20),
	"position" varchar(50),
	"shirt_number" integer,
	"photo" text,
	"market_value" double precision,
	"contract_until" date,
	CONSTRAINT "players_api_id_unique" UNIQUE("api_id")
);
--> statement-breakpoint
CREATE TABLE "matches" (
	"id" serial PRIMARY KEY NOT NULL,
	"api_id" integer,
	"competition_id" integer NOT NULL,
	"season_id" integer NOT NULL,
	"home_team_id" integer NOT NULL,
	"away_team_id" integer NOT NULL,
	"stadium_id" integer,
	"kickoff" timestamp NOT NULL,
	"status" varchar(50) DEFAULT 'Scheduled' NOT NULL,
	"minute" integer DEFAULT 0,
	"home_score" integer DEFAULT 0,
	"away_score" integer DEFAULT 0,
	"attendance" integer,
	"referee_id" integer,
	CONSTRAINT "matches_api_id_unique" UNIQUE("api_id")
);
--> statement-breakpoint
CREATE TABLE "referees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"country" varchar(100),
	"photo" text
);
--> statement-breakpoint
CREATE TABLE "match_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"minute" integer NOT NULL,
	"type" varchar(50) NOT NULL,
	"player_id" integer,
	"assist_player_id" integer,
	"team_id" integer NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "lineup_players" (
	"id" serial PRIMARY KEY NOT NULL,
	"lineup_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	"position" varchar(20),
	"is_captain" boolean DEFAULT false,
	"starter" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "lineups" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"team_id" integer NOT NULL,
	"formation" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "standings" (
	"id" serial PRIMARY KEY NOT NULL,
	"competition_id" integer NOT NULL,
	"season_id" integer NOT NULL,
	"team_id" integer NOT NULL,
	"position" integer NOT NULL,
	"played" integer DEFAULT 0,
	"wins" integer DEFAULT 0,
	"draws" integer DEFAULT 0,
	"losses" integer DEFAULT 0,
	"goals_for" integer DEFAULT 0,
	"goals_against" integer DEFAULT 0,
	"goal_difference" integer DEFAULT 0,
	"points" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "live_match_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"possession" double precision,
	"shots" integer DEFAULT 0,
	"shots_on_target" integer DEFAULT 0,
	"corners" integer DEFAULT 0,
	"offsides" integer DEFAULT 0,
	"yellow_cards" integer DEFAULT 0,
	"red_cards" integer DEFAULT 0,
	"passes" integer DEFAULT 0,
	"pass_accuracy" double precision,
	"fouls" integer DEFAULT 0,
	"xg" double precision
);
--> statement-breakpoint
CREATE TABLE "player_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"season_id" integer NOT NULL,
	"matches_played" integer DEFAULT 0,
	"minutes" integer DEFAULT 0,
	"goals" integer DEFAULT 0,
	"assists" integer DEFAULT 0,
	"shots" integer DEFAULT 0,
	"shots_on_target" integer DEFAULT 0,
	"passes" integer DEFAULT 0,
	"pass_accuracy" double precision,
	"yellow_cards" integer DEFAULT 0,
	"red_cards" integer DEFAULT 0,
	"rating" double precision,
	"xg" double precision,
	"xa" double precision,
	"clean_sheets" integer DEFAULT 0,
	"saves" integer DEFAULT 0,
	"tackles" integer DEFAULT 0,
	"interceptions" integer DEFAULT 0,
	"dribbles" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "team_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer NOT NULL,
	"season_id" integer NOT NULL,
	"wins" integer DEFAULT 0,
	"draws" integer DEFAULT 0,
	"losses" integer DEFAULT 0,
	"goals_for" integer DEFAULT 0,
	"goals_against" integer DEFAULT 0,
	"clean_sheets" integer DEFAULT 0,
	"xg" double precision,
	"xga" double precision,
	"possession" double precision,
	"pass_accuracy" double precision,
	"shots" integer DEFAULT 0,
	"shots_on_target" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "transfers" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"from_team_id" integer,
	"to_team_id" integer,
	"fee" double precision,
	"date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE "injuries" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"type" varchar(255) NOT NULL,
	"start_date" date NOT NULL,
	"expected_return" date,
	"status" varchar(50) DEFAULT 'Out'
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(500) NOT NULL,
	"description" text,
	"image" text,
	"source" varchar(255),
	"published_at" timestamp DEFAULT now(),
	"competition_id" integer,
	"team_id" integer,
	"player_id" integer
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar" text,
	"country" varchar(100),
	"timezone" varchar(50),
	"language" varchar(10) DEFAULT 'en',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "favorite_competitions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"competition_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "favorite_matches" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"match_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "favorite_players" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"player_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "favorite_teams" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"team_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notification_settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"goals" boolean DEFAULT true,
	"kickoff" boolean DEFAULT true,
	"lineup" boolean DEFAULT true,
	"red_cards" boolean DEFAULT true,
	"penalties" boolean DEFAULT true,
	"injuries" boolean DEFAULT true,
	"transfers" boolean DEFAULT true,
	"news" boolean DEFAULT true,
	CONSTRAINT "notification_settings_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "awards" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"season_id" integer NOT NULL,
	"award" varchar(255) NOT NULL,
	"date" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "odds" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"home_win" double precision,
	"draw" double precision,
	"away_win" double precision,
	"bookmaker" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "player_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"match_id" integer NOT NULL,
	"rating" double precision,
	"man_of_the_match" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "predictions" (
	"id" serial PRIMARY KEY NOT NULL,
	"match_id" integer NOT NULL,
	"home_win" double precision,
	"draw" double precision,
	"away_win" double precision,
	"expected_goals" double precision,
	"confidence" double precision
);
--> statement-breakpoint
CREATE TABLE "recently_viewed" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"entity_type" varchar(50) NOT NULL,
	"entity_id" integer NOT NULL,
	"viewed_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "search_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"query" varchar(500) NOT NULL,
	"searched_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "user_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"theme" varchar(20) DEFAULT 'system',
	"language" varchar(10) DEFAULT 'en',
	"timezone" varchar(50),
	"favorite_competition" integer,
	"home_screen" varchar(50) DEFAULT 'live',
	"live_only" boolean DEFAULT false,
	CONSTRAINT "user_preferences_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "watchlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"match_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_competition_id_competitions_id_fk" FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_stadium_id_stadiums_id_fk" FOREIGN KEY ("stadium_id") REFERENCES "public"."stadiums"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "teams" ADD CONSTRAINT "teams_coach_id_coaches_id_fk" FOREIGN KEY ("coach_id") REFERENCES "public"."coaches"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "players" ADD CONSTRAINT "players_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_competition_id_competitions_id_fk" FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_season_id_seasons_id_fk" FOREIGN KEY ("season_id") REFERENCES "public"."seasons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_home_team_id_teams_id_fk" FOREIGN KEY ("home_team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_away_team_id_teams_id_fk" FOREIGN KEY ("away_team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_stadium_id_stadiums_id_fk" FOREIGN KEY ("stadium_id") REFERENCES "public"."stadiums"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "matches" ADD CONSTRAINT "matches_referee_id_referees_id_fk" FOREIGN KEY ("referee_id") REFERENCES "public"."referees"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_events" ADD CONSTRAINT "match_events_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_events" ADD CONSTRAINT "match_events_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_events" ADD CONSTRAINT "match_events_assist_player_id_players_id_fk" FOREIGN KEY ("assist_player_id") REFERENCES "public"."players"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "match_events" ADD CONSTRAINT "match_events_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lineup_players" ADD CONSTRAINT "lineup_players_lineup_id_lineups_id_fk" FOREIGN KEY ("lineup_id") REFERENCES "public"."lineups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lineup_players" ADD CONSTRAINT "lineup_players_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lineups" ADD CONSTRAINT "lineups_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lineups" ADD CONSTRAINT "lineups_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "standings" ADD CONSTRAINT "standings_competition_id_competitions_id_fk" FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "standings" ADD CONSTRAINT "standings_season_id_seasons_id_fk" FOREIGN KEY ("season_id") REFERENCES "public"."seasons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "standings" ADD CONSTRAINT "standings_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "live_match_stats" ADD CONSTRAINT "live_match_stats_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "player_stats" ADD CONSTRAINT "player_stats_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "player_stats" ADD CONSTRAINT "player_stats_season_id_seasons_id_fk" FOREIGN KEY ("season_id") REFERENCES "public"."seasons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "team_stats" ADD CONSTRAINT "team_stats_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "team_stats" ADD CONSTRAINT "team_stats_season_id_seasons_id_fk" FOREIGN KEY ("season_id") REFERENCES "public"."seasons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_from_team_id_teams_id_fk" FOREIGN KEY ("from_team_id") REFERENCES "public"."teams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_to_team_id_teams_id_fk" FOREIGN KEY ("to_team_id") REFERENCES "public"."teams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "injuries" ADD CONSTRAINT "injuries_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_competition_id_competitions_id_fk" FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_competitions" ADD CONSTRAINT "favorite_competitions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_competitions" ADD CONSTRAINT "favorite_competitions_competition_id_competitions_id_fk" FOREIGN KEY ("competition_id") REFERENCES "public"."competitions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_matches" ADD CONSTRAINT "favorite_matches_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_matches" ADD CONSTRAINT "favorite_matches_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_players" ADD CONSTRAINT "favorite_players_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_players" ADD CONSTRAINT "favorite_players_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_teams" ADD CONSTRAINT "favorite_teams_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorite_teams" ADD CONSTRAINT "favorite_teams_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notification_settings" ADD CONSTRAINT "notification_settings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "awards" ADD CONSTRAINT "awards_season_id_seasons_id_fk" FOREIGN KEY ("season_id") REFERENCES "public"."seasons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "odds" ADD CONSTRAINT "odds_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "player_ratings" ADD CONSTRAINT "player_ratings_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "player_ratings" ADD CONSTRAINT "player_ratings_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "predictions" ADD CONSTRAINT "predictions_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recently_viewed" ADD CONSTRAINT "recently_viewed_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_favorite_competition_competitions_id_fk" FOREIGN KEY ("favorite_competition") REFERENCES "public"."competitions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_match_id_matches_id_fk" FOREIGN KEY ("match_id") REFERENCES "public"."matches"("id") ON DELETE cascade ON UPDATE no action;