// react, next
import { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

// form dependencies
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// user defines
import TextInput from '@/components/auth/text-input'

const Signin: NextPage = () => {
  return (
    <>
      <section className="pt-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Login
              </h2>
            </div>
            <form action="">
              <TextInput inputType="email" placeholder="Email" />
              <TextInput inputType="password" placeholder="Password" />
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4">
                  <Link href="/auth/forgot-password">
                    <a className="inline-block font-extrabold hover:underline">
                      Forgot your password?
                    </a>
                  </Link>
                </div>
              </div>
              <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
                Sign in
              </button>
              <p className="text-center font-extrabold">
                Don&rsquo;t have an account?{' '}
                <Link href="/auth/signup">
                <a className="text-gray-500 hover:underline" href="#">
                  Sign up
                </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signin
