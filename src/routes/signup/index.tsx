import { authClient } from '#/lib/auth-client'
import SignUp from '@/components/SignUp'
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  const route = useRouter()

  const handleSignUp = async ({name, email, password}: { name: string; email: string; password: string }) => {
    const { error } = await authClient.signUp.email({ name, email, password })
    if (error) {
      console.error(error)
    } else {
      route.navigate({ to: '/dashboard' as never })
    }
  }

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: 'google', callbackURL: '/dashboard' })
  }

  return <div><SignUp onSubmit={handleSignUp} onGoogleSignIn={handleGoogleSignIn} /></div>
}
