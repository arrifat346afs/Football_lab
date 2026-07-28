import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DashboardSidebar } from '@/components/dashboard-nav'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="pb-16 pl-0 md:pb-0 md:pl-64">
        <div className="mx-auto max-w-6xl p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
