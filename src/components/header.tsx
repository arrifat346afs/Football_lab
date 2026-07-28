import { Link } from "@tanstack/react-router";
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

const menuItems = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
]

export const HeroHeader = () => {
  return (
    <header>
      <nav className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo />
              </Link>
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center justify-end md:flex-nowrap lg:w-fit">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm">
                  <Link to={'/login' as never}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm">
                  <Link to={'/signup' as never}>
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
