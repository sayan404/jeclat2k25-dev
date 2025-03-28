import { backlinks } from '../lib/backlinks'

export default function LinkBuilder() {
  return (
    <div className="my-8">
      <h2>Partner Institutions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {backlinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            rel={link.rel}
            target="_blank"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            {link.anchor}
          </a>
        ))}
      </div>
    </div>
  )
} 