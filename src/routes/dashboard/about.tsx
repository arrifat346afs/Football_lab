import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">About</h1>
      <p className="text-muted-foreground mb-8">Learn more about Football Lab.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        About content coming soon.
      </div>
    </>
  )
}
