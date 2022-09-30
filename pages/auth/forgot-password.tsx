import { NextPage } from 'next'
import Link from 'next/link'

const ForgotPassword: NextPage = () => {
  return (
    <>
      <h1>Forgot Password Page</h1>
      <Link href="/auth/login">
        <a>Return to Login Page</a>
      </Link>
    </>
  )
}

export default ForgotPassword
