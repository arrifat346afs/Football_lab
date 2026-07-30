import { authClient } from '#/lib/auth-client'
import LogIn from '@/components/Login'
import { createFileRoute, useRouter } from '@tanstack/react-router'


export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await authClient.signIn.email({ email, password })
    if (error) {
      console.error(error)
    } else {
      router.navigate({ to: '/dashboard' as never })
    }

  }

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: 'google', callbackURL: '/dashboard' })
  }

  return <LogIn onSubmit={handleLogin} onGoogleSignIn={handleGoogleSignIn} />
}
