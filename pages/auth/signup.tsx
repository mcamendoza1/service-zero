// react, next
import type { NextPage } from 'next'
import Link from 'next/link'

// user defines
import TextInput from '@/components/auth/text-input'

const SignUp: NextPage = () => {
  return (
    <>
      <h1>Sign up Page</h1>
      <Link href="/auth/login">login</Link>
    </>
  )
}

export default SignUp
