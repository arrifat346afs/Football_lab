import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/competitions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Competitions</h1>
      <p className="text-muted-foreground mb-8">Explore leagues and tournaments.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        Competition content coming soon.
      </div>
    </>
  )
}
