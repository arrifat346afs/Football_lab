import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
          Your Complete Football Companion
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
          Football Lab brings together live scores, historical match data, player and team statistics, and AI-powered predictions — all in one place. Follow your favorite teams and players, set match reminders, and stay on top of the beautiful game.
        </p>
      </section>
    </main>
  )
}
