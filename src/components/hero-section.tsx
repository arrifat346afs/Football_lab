import { Button } from '@/components/ui/button'


export default function HeroSection() {
  return (
    <>
      <main className="@container overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Live Football, History & Predictions — All in One Place</h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">Track live scores, explore match history, follow your favorite players and teams, and get AI-powered predictions for upcoming fixtures.</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-5 text-base">
                    <a href="/matches/">
                      <span className="text-nowrap">Explore Matches</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-166 @max-lg:-translate-x-20 mask-radial-from-35% mask-radial-to-70% max-lg:size-120 max-lg:order-first max-lg:mx-auto max-lg:-mb-20 lg:absolute lg:inset-0 lg:-inset-y-56 lg:ml-auto lg:translate-x-28">
                <img
                  className="size-full object-contain object-right"
                  src="/Soccer player passing on the ball.svg"
                  alt="Soccer player passing on the ball"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
