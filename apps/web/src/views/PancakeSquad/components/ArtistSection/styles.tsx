import { Flex, Link } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const StyledArtistSectionContainer = styled(Flex)<{ $isDark: boolean }>`
  position: relative;
  background: ${({ $isDark }) =>
    $isDark
      ? `linear-gradient(90deg, #5c3131 0%, #4a1111 100%);`
      : `linear-gradient(90deg, #faf9fa 0%, #d7caec 100%);`};
`

export const StyledArtistBioContainer = styled(Flex)`
  position: relative;
  padding: 48px 36px;
  border-radius: 56px;
  background: ${({ theme }) => theme.colors.invertedContrast};
  box-shadow: ${({ theme }) => theme.shadows.level1};

  & > svg {
    position: absolute;
    width: 20px;
    height: 85px;
    left: calc(50% - 10px);
    top: -51px;
    transform: rotate(90deg);

    ${({ theme }) => theme.mediaQueries.md} {
      left: -19px;
      top: calc(50% - 42px);
      transform: none;
    }
  }
`

export const StyledSocialButton = styled(Link)`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: fit-content;
  }
`
