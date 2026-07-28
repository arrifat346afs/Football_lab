import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/logo'

const tabs = [
  { name: 'Matches', href: '/dashboard/matches', icon: '⚽' },
  { name: 'Competitions', href: '/dashboard/competitions', icon: '🏆' },
  { name: 'Teams', href: '/dashboard/teams', icon: '👥' },
  { name: 'Players', href: '/dashboard/players', icon: '👤' },
  { name: 'Predictions', href: '/dashboard/predictions', icon: '📊' },
  { name: 'News', href: '/dashboard/news', icon: '📰' },
  { name: 'About', href: '/dashboard/about', icon: 'ℹ️' },
]

export function DashboardNav() {
  return (
    <nav className="bg-background border-b">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-3">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        <div className="-mx-6 flex gap-1 overflow-x-auto px-6 pb-0">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              className="text-muted-foreground hover:text-accent-foreground hover:bg-accent flex shrink-0 items-center gap-1.5 rounded-t-md px-4 py-2 text-sm font-medium transition-colors"
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
