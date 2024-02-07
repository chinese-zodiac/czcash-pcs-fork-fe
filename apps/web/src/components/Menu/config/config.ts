import { ContextApi } from '@pancakeswap/localization'
import {
  DropdownMenuItemType,
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  NftFillIcon,
  NftIcon,
  PancakeProtectorIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { SUPPORT_BUY_CRYPTO, SUPPORT_FARMS, SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        {
          label: t('Buy Crypto'),
          href: '/buy-crypto',
          supportChainIds: SUPPORT_BUY_CRYPTO,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      items: [
        {
          label: t('Farms & Pools'),
          href: `https://cz.farm`,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Game'),
      icon: PancakeProtectorIcon,
      hideSubNav: true,
      href: '',
      items: [
        {
          label: t('Bandit Heist'),
          href: 'https://banditheist.prpg.quest/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('NFT'),
      href: ``,
      icon: NftIcon,
      fillIcon: NftFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      image: '/images/decorations/nft.png',
      items: [
        {
          label: t('Outlaws'),
          href: `https://outlaws.cz.cash`,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Bad Rabbits'),
          href: `https://bad.rabbitcatch.com/`,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Rabbits'),
          href: `https://rabbitcatch.com`,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Silver Dollars'),
          href: `https://numis.cz.cash`,
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ],
    },
    {
      label: '',
      href: '',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Affiliate Program'),
          href: 'https://rewards.cz.cash',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Telegram'),
          href: 'https://t.me/CZodiacofficial ',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Docs'),
          href: 'https://docs.czodiac.com/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
