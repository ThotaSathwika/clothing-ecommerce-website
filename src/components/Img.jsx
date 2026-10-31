import { useState } from 'react'

// Image with lazy loading, fade-in and a fallback if the remote photo fails
export default function Img({ src, alt = '', className = '' }) {
  const [url, setUrl] = useState(src)
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setUrl(`https://picsum.photos/seed/${encodeURIComponent(alt || 'img')}/900/700`)}
      className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
