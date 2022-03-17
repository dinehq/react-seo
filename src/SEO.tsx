import { FC } from 'react'
import React from 'react'

export interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
  keywords?: string[]
  og?: {
    type?: opgType
    title?: string
  }
  twitter?: {
    cardType: twitterCardType
  }
}

export type twitterCardType = 'summary' | 'summary_large_image'
export type opgType = 'website' | 'article'

export const SEO: FC<SEOProps> = (props) => {
  const { title, description, image, keywords, url, twitter, children } = props

  return (
    <>
      {/* base */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {keywords && Array.isArray(keywords) && (
        <meta name="keywords" content={keywords.join(',')} />
      )}

      {/* base ogp */}
      {url && <meta property="og:url" content={url} />}

      {/* twitter */}
      {image && <meta name="twitter:image:src" content={image} />}
      {twitter?.cardType && (
        <meta
          key="twitter:card"
          name="twitter:card"
          content={twitter.cardType}
        />
      )}
      {children}
    </>
  )
}
