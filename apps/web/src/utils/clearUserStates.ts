import { Dispatch } from '@reduxjs/toolkit'
import { configureScope } from '@sentry/nextjs'
import { PREDICTION_TOOLTIP_DISMISS_KEY } from 'config/constants'
import { resetUserState, toggleFarmTransactionModal } from 'state/global/actions'
import getLocalStorageItemKeys from './getLocalStorageItemKeys'
import { LS_ORDERS } from './localStorageOrders'

export const clearUserStates = (
  dispatch: Dispatch<any>,
  {
    chainId,
    newChainId,
  }: {
    chainId?: number
    newChainId?: number
  },
) => {
  dispatch(resetUserState({ chainId, newChainId }))
  dispatch(toggleFarmTransactionModal({ showModal: false }))
  configureScope((scope) => scope.setUser(null))
  const lsOrderKeys = getLocalStorageItemKeys(LS_ORDERS)
  lsOrderKeys.forEach((lsOrderKey) => window?.localStorage?.removeItem(lsOrderKey))
  window?.localStorage?.removeItem(PREDICTION_TOOLTIP_DISMISS_KEY)
}
