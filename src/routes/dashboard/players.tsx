import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/players')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Players</h1>
      <p className="text-muted-foreground mb-8">Search and track player performances.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        Players content coming soon.
      </div>
    </>
  )
}
