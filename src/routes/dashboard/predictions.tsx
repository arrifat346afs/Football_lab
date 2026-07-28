import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/predictions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Predictions</h1>
      <p className="text-muted-foreground mb-8">AI-powered match forecasts and insights.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        Predictions content coming soon.
      </div>
    </>
  )
}
