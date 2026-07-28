import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/teams')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Teams</h1>
      <p className="text-muted-foreground mb-8">Discover and follow your favorite teams.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        Teams content coming soon.
      </div>
    </>
  )
}
