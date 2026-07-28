import { createFileRoute } from '@tanstack/react-router'
import { HeroHeader } from '@/components/header'
import HeroSection from '@/components/hero-section'
import ContentSection from '@/components/Content'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="">
      <HeroHeader />
      <HeroSection />
      <ContentSection />
    </main>
  )
}
