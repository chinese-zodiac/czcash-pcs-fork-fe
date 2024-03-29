import { PageHeader, PageHeaderProps } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'

const MarketPageHeader: React.FC<React.PropsWithChildren<PageHeaderProps>> = (props) => {
  const { theme } = useTheme()
  const background = theme.isDark
    ? 'linear-gradient(166.77deg, #5c1313 0%, #6a1a1a 100%)'
    : 'linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)'
  return <PageHeader background={background} {...props} style={{ paddingBottom: '0px' }} />
}

export default MarketPageHeader
