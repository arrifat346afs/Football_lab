# Football Lab — Content Plan

## 1. Navigation (Header)

| Menu Item | Route | Description |
|---|---|---|
| Matches | `/matches` | Live, today, upcoming, results |
| Competitions | `/competitions` | Leagues & cups with standings |
| Teams | `/teams` | Team profiles and squads |
| Players | `/players` | Player profiles and stats |
| Predictions | `/predictions` | AI match forecasts |
| News | `/news` | Football news & transfers |
| About | `/about` | About Football Lab |

Buttons: **Login** | **Sign Up**

---

## 2. Home Page (`/`)

### Hero Section
- **Headline**: Live Football, History & Predictions — All in One Place
- **Subtitle**: Track live scores, explore match history, follow your favorite players and teams, and get AI-powered predictions for upcoming fixtures.
- **CTA Button**: "Explore Matches" → `/matches`
- **Hero Image**: Football stadium or action shot (unsplash football photo)

### Below Hero (future)
- Featured live match
- Today's top fixtures

---

## 3. Matches Page (`/matches`)

### Sub-tabs
- **Live** — matches currently in progress (auto-refresh)
- **Today** — all of today's fixtures
- **Upcoming** — next 7 days
- **Results** — recent completed matches

### Each Match Card
- Competition badge
- Home team crest + name vs Away team crest + name
- Score (live/final) or `vs` (upcoming)
- Match minute (live only)
- Kickoff time (upcoming)
- Venue name

---

## 4. Match Detail Page (`/matches/{id}`)

- Scoreboard (home score — away score)
- Match timeline (goal scorers, cards, substitutions, minute-by-minute)
- Lineups with formation
- Match statistics (possession, shots, xG, corners, fouls)
- Player ratings
- Head-to-head (last 5 meetings)
- Prediction panel (win/draw/away %)
- "Add Reminder" button

---

## 5. Competitions Page (`/competitions`)

### List View
All competitions grouped by country, showing:
- Competition logo
- Name
- Country flag
- Current season
- Type (League/Cup)

### Competition Detail (`/competitions/{id}`)
- **Standings** — full league table (pos, team, P, W, D, L, GF, GA, GD, Pts, form)
- **Fixtures** — upcoming matches
- **Results** — recent results
- **Top Scorers** — goals leaderboard
- **Top Assists** — assists leaderboard
- **News** — competition-specific articles

---

## 6. Teams Page (`/teams`)

### Browse
All teams with crest, name, competition badges.

### Team Detail (`/teams/{id}`)
- **Overview** — founded year, stadium, city, country, coach
- **Squad** — player cards (photo, name, position, jersey, nationality, age)
- **Stats** — season record (wins, draws, losses, goals, clean sheets)
- **Matches** — recent results + upcoming fixtures
- **Transfers** — ins/outs for current season
- **Injuries** — current injury list
- **Standings** — league position
- **News** — team articles
- **"Add to Favorites"** button

---

## 7. Players Page (`/players`)

### Browse
All players, filterable/searchable by name, position, team, competition.

### Player Detail (`/players/{id}`)
- **Bio** — photo, full name, date of birth, age, nationality, position, preferred foot, height, weight, shirt number, market value, contract until
- **Current Season Stats** — appearances, goals, assists, shots, pass accuracy, cards, rating, xG, xA, clean sheets (GK)
- **Career Stats** — per-season breakdown (team, competition, appearances, goals, assists)
- **Last 5 Matches** — recent performance (rating, goals, key stats)
- **Injury History** — past injuries with dates
- **Transfer History** — past transfers (from, to, fee, date)
- **"Add to Favorites"** button

---

## 8. Predictions Page (`/predictions`)

### Today's Predictions
List of upcoming matches with prediction cards:
- Home win / Draw / Away win percentages
- Expected goals (over/under)
- Confidence level
- Key supporting stats (form, H2H)
- Odds comparison

### Filters
- By competition
- By date

### Community Prediction Game (future)
- Make your picks
- Track accuracy
- Leaderboard

---

## 9. News Page (`/news`)

### Feed
Chronological list: title, image, source, published time, related badges (team/competition).

### Filters
- All
- Transfers
- Injuries
- Match Reports
- Rumors

### Article Detail
Full article with linked players, teams, competitions.

---

## 10. Dashboard (`/dashboard/`) — Logged-in only

- **My Matches Today** — live + upcoming for favorite teams
- **Favorite Players** — quick stat cards (last match rating, season goals)
- **Favorite Teams** — crests with next match and standing position
- **Favorite Competitions** — quick links to standings
- **Recent Activity** — last viewed matches/players/teams
- **Upcoming Reminders** — countdown to saved match kickoffs

---

## 11. Favorites (`/favorites`) — Logged-in only

Four sections:
- **Teams** — followed teams with next match info
- **Players** — followed players with recent form
- **Competitions** — followed leagues
- **Matches** — saved/bookmarked matches

---

## 12. Notifications & Settings

### Notification Settings
Toggle alerts for:
- Match kickoff
- Goals (favorite teams)
- Lineups announced
- Red cards
- Penalties
- Transfers (favorite team)
- Injury updates (favorite player)

### Account Settings
- Profile (name, email, avatar)
- Language
- Timezone
- Theme (light / dark / auto)

---

## 13. Auth Pages

### Login
- **Heading**: "Sign In to Football Lab"
- **Subtitle**: "Welcome back! Sign in to continue"
- Fields: Username, Password
- "Forgot your Password?" link
- Social sign-in: Google, Microsoft
- Bottom link: "Don't have an account? Create account"

### Sign Up
- **Heading**: "Create a Football Lab Account"
- **Subtitle**: "Join Football Lab and never miss a moment"
- Fields: Firstname, Lastname, Username, Password
- Social sign-up: Google, Microsoft
- Bottom link: "Have an account? Sign In"

---

## 14. About Page (`/about`)

- **Kicker**: About
- **Heading**: Your Complete Football Companion
- **Description**: Football Lab brings together live scores, historical match data, player and team statistics, and AI-powered predictions — all in one place. Follow your favorite teams and players, set match reminders, and stay on top of the beautiful game.

---

## 15. Footer

- Copyright: `© {year} Football Lab. All rights reserved.`
- Tagline: "Your Football Hub"
- Social links: Football Lab's X and GitHub (or placeholder)
