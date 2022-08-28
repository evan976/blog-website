import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {

  const { theme, setTheme } = useTheme()

  return (
    <div className='bg-white dark:bg-primary'>
      <h1 className="text-3xl font-bold underline text-black dark:text-white">
        Hello world!
      </h1>
      <button
        className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-sm"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change Theme
      </button>
    </div>
  )
}

export default Home
