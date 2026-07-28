import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/matches')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Matches</h1>
      <p className="text-muted-foreground mb-8">Browse and follow live matches.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        Match content coming soon.
      </div>
    </>
  )
}
