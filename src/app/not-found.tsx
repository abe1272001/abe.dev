import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="prose text-center dark:prose-invert">
      <h2 className="mb-2 text-3xl">Not Found</h2>
      <p className="mb-4">Could not find requested resource.</p>
      <Link className="rounded border px-4 py-2 no-underline" href="/">
        Back Home
      </Link>
    </div>
  )
}
