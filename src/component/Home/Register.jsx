import React from 'react'

export default function Register() {
  return (
    <div className ="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className ="w-full max-w-md space-y-8">
        <div className ="bg-white shadow-md rounded-md p-6">

            <img className ="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 className ="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register for an account
            </h2>


            <form className ="space-y-6" method="POST">

                <div>
                    <label for="new-password" className ="block text-sm font-medium text-gray-700">Username</label>
                    <div className ="mt-1">
                        <input name="username" placeholder="Enter your name" type="username" required
                            className ="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className ="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className ="mt-1">
                        <input name="email" type="email-address" placeholder="Enter your phone number" autocomplete="email-address" required
                            className ="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className ="block text-sm font-medium text-gray-700">Password</label>
                    <div className ="mt-1">
                        <input name="password" type="password" placeholder="Enter your password" autocomplete="password" required
                            className ="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className ="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className ="mt-1">
                        <input name="confirm_password" type="password" placeholder="Confirm your password" autocomplete="confirm-password" required
                            className ="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className ="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                        Account
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
