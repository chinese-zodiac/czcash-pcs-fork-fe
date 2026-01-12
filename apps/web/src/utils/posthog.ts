import posthog from 'posthog-js'

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

let initialized = false

export function initPostHog() {
  if (initialized || typeof window === 'undefined') return

  if (!POSTHOG_KEY) {
    console.warn('PostHog: No API key found. Set NEXT_PUBLIC_POSTHOG_KEY to enable analytics.')
    return
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // We'll capture manually for SPA navigation
    capture_pageleave: true,
    persistence: 'localStorage',
    autocapture: true,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: {
        password: true,
      },
    },
  })

  initialized = true
}

export function identifyWallet(address: string, chainId?: number) {
  if (!initialized) return

  posthog.identify(address, {
    wallet_address: address,
    chain_id: chainId,
  })
}

export function resetUser() {
  if (!initialized) return
  posthog.reset()
}

export function trackPageView(url: string) {
  if (!initialized) return
  posthog.capture('$pageview', {
    $current_url: url,
  })
}

export function trackEvent(event: string, properties?: Record<string, any>) {
  if (!initialized) return
  posthog.capture(event, properties)
}

// Track swap events
export function trackSwap(params: {
  inputToken: string
  outputToken: string
  inputAmount: string
  outputAmount: string
  chainId: number
  slippage: number
}) {
  trackEvent('swap_executed', params)
}

// Track liquidity events
export function trackLiquidity(
  action: 'add' | 'remove',
  params: {
    token0: string
    token1: string
    amount0: string
    amount1: string
    chainId: number
  },
) {
  trackEvent(`liquidity_${action}`, params)
}

export { posthog }
