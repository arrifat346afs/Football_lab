import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">News</h1>
      <p className="text-muted-foreground mb-8">Latest football stories and updates.</p>
      <div className="rounded-lg border p-8 text-center text-muted-foreground">
        News content coming soon.
      </div>
    </>
  )
}
