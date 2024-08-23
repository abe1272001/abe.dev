import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { Github, LinkedinIcon, MSquare, TwitterIcon } from 'lucide-react'

import SocialIconLink from '@/components/molecules/app-social-icon-link'

export function Footer() {
  return (
    <footer className="flex min-h-[var(--footer-height)] justify-center border-t border-gray-200 pt-3 dark:border-gray-600">
      <div className="flex flex-col justify-between gap-3 py-4">
        <div className="flex items-center justify-center gap-3">
          <SocialIconLink
            icon={<MSquare className="size-6" />}
            href={siteMetadata.medium}
          />
          <SocialIconLink
            icon={<LinkedinIcon className="size-6 fill-current" />}
            href={siteMetadata.linkedin}
          />
          <SocialIconLink
            icon={<TwitterIcon className="size-6 fill-current" />}
            href={siteMetadata.x}
          />
          <SocialIconLink
            icon={<Github className="size-6" />}
            href={siteMetadata.github}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            <Link href="/">Abe Chen</Link> • &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
