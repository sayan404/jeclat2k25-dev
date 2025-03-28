export default function SocialShare() {
  const shareUrl = 'https://jeclat2k25.in'
  const title = 'JECLAT 2K25 - The Queen of All Fests'

  return (
    <div className="flex gap-4">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-share-button"
      >
        Share on Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-share-button"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-share-button"
      >
        Share on LinkedIn
      </a>
    </div>
  )
} 