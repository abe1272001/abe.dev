const SocialIconLink = ({
  icon,
  href,
}: {
  icon: React.ReactNode
  href: string
}) => {
  return (
    <a
      target="_blank"
      href={href}
      rel="noopener noreferrer"
      aria-label={href}
      className="text-black hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
    >
      {icon}
    </a>
  )
}

export default SocialIconLink
