import { useTranslation } from '@pancakeswap/localization'
import { Button, CardBody, Select, Text } from '@pancakeswap/uikit'
import { AppHeader } from 'components/App'
import NextLink from 'next/link'
import StakeInfo from 'views/LiquidStaking/components/StakeInfo'
import { LiquidStakingList } from '../constants/types'

export interface OptionProps extends LiquidStakingList {
  label: string
  value: string
}

interface LiquidStakingPageStakeProps {
  selectedList: OptionProps
  optionsList: OptionProps[]
  handleSortOptionChange: (value: any) => void
}

export const LiquidStakingPageStake: React.FC<LiquidStakingPageStakeProps> = ({
  selectedList,
  optionsList,
  handleSortOptionChange,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <AppHeader
        shouldCenter
        subtitle={t('Unlock liquidity while earning rewards')}
        title={t('Liquid Staking')}
        noConfig
      />
      <CardBody>
        <Text fontSize="12px" mb="8px" color="secondary" bold textTransform="uppercase">
          {t('Choose a pair to liquid stake')}
        </Text>
        {optionsList.length > 0 && <Select mb="24px" options={optionsList} onOptionChange={handleSortOptionChange} />}
        <StakeInfo selectedList={selectedList} />
        <NextLink href={`/liquid-staking/${selectedList?.contract}`}>
          <Button width="100%">{t('Proceed')}</Button>
        </NextLink>
      </CardBody>
    </>
  )
}
