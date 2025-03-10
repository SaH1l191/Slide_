
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen   flex items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <div className="max-w-md w-full space-y-8 z-10">
        <h2 className="mt-6 text-9xl font-extrabold text-gray-900 dark:text-gray-100">404</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">Oops!</p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          It looks like you've taken a wrong turn. Let's get you back home.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            prefetch={false}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}