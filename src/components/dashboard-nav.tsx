import { Link, useLocation } from '@tanstack/react-router'
import {
  LayoutDashboard,
  CalendarRange,
  Trophy,
  Users,
  UserCircle,
  TrendingUp,
  Newspaper,
  Info,
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const tabs = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Matches', href: '/dashboard/matches', icon: CalendarRange },
  { name: 'Competitions', href: '/dashboard/competitions', icon: Trophy },
  { name: 'Teams', href: '/dashboard/teams', icon: Users },
  { name: 'Players', href: '/dashboard/players', icon: UserCircle },
  { name: 'Predictions', href: '/dashboard/predictions', icon: TrendingUp },
  { name: 'News', href: '/dashboard/news', icon: Newspaper },
  { name: 'About', href: '/dashboard/about', icon: Info },
]

export function DashboardSidebar() {
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/dashboard/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r bg-sidebar md:flex">
        <div className="flex h-14 items-center border-b border-sidebar-border px-6">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive(tab.href)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground',
              )}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t bg-sidebar md:hidden">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.href}
            className={cn(
              'flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-colors',
              isActive(tab.href)
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
          >
            <tab.icon className="h-5 w-5" />
          </Link>
        ))}
      </nav>
    </>
  )
}
