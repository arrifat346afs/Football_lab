import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">My Dashboard</h1>
      <p className="text-muted-foreground mb-8">Your Personalized Football Hub</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Live Matches</h2>
          <p className="text-muted-foreground text-sm">Ongoing matches across all your followed competitions.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Favorite Teams</h2>
          <p className="text-muted-foreground text-sm">Quick view of your teams — next match, standing, form.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Favorite Players</h2>
          <p className="text-muted-foreground text-sm">Recent performance and season stats for your players.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Upcoming Reminders</h2>
          <p className="text-muted-foreground text-sm">Match kickoff countdowns and alerts you've set.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Today's Predictions</h2>
          <p className="text-muted-foreground text-sm">AI-powered forecasts for today's fixtures.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="mb-2 text-lg font-semibold">Latest News</h2>
          <p className="text-muted-foreground text-sm">Top stories from your favorite teams and competitions.</p>
        </div>
      </div>
    </>
  )
}
