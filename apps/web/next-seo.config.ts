import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | CZ.CASH',
  defaultTitle: 'CZ.CASH',
  description: 'Trade the best tokens on BSC with the highest liquidity dex',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@zodiacs_c',
    site: '@zodiacs_c',
  },
  openGraph: {
    title: 'CZ.CASH | Trade the best tokens on BSC',
    description: 'Trade the best tokens on BSC with the highest liquidity dex',
    images: [{ url: 'https://cz.cash/opengraph.png' }],
  },
}
