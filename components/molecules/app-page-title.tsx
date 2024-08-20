import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function AppPageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
