import { getIsolationScope, setUser } from '@sentry/nextjs'
import { PREDICTION_TOOLTIP_DISMISS_KEY } from 'config/constants'
import { clearUserStates } from './clearUserStates'
import { LS_ORDERS } from './localStorageOrders'

describe('clearUserStates', () => {
  afterEach(() => {
    setUser(null)
    localStorage.clear()
  })

  it('clears the Sentry identity and user storage when resetting the user', () => {
    const dispatch = vi.fn()
    setUser({ id: 'previous-user' })
    localStorage.setItem(`${LS_ORDERS}previous-user56`, '[]')
    localStorage.setItem(PREDICTION_TOOLTIP_DISMISS_KEY, 'true')
    localStorage.setItem('unrelated-preference', 'preserved')

    clearUserStates(dispatch, { chainId: 56, newChainId: 1 })

    expect(getIsolationScope().getScopeData().user).toEqual({})
    expect(localStorage.getItem(`${LS_ORDERS}previous-user56`)).toBeNull()
    expect(localStorage.getItem(PREDICTION_TOOLTIP_DISMISS_KEY)).toBeNull()
    expect(localStorage.getItem('unrelated-preference')).toBe('preserved')
    expect(dispatch).toHaveBeenCalledWith({ type: 'global/resetUserState', payload: { chainId: 56, newChainId: 1 } })
    expect(dispatch).toHaveBeenCalledWith({
      type: 'transactions/toggleFarmTransactionModal',
      payload: { showModal: false },
    })
  })
})
