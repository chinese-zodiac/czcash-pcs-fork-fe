import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { initPostHog, identifyWallet, resetUser, trackPageView } from '../utils/posthog'

export function usePostHog() {
  const router = useRouter()
  const { address, chainId, isConnected } = useAccount()

  // Initialize PostHog on mount
  useEffect(() => {
    initPostHog()
  }, [])

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url)
    }

    // Track initial page view
    trackPageView(window.location.href)

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Identify user when wallet connects
  useEffect(() => {
    if (isConnected && address) {
      identifyWallet(address, chainId)
    } else {
      resetUser()
    }
  }, [isConnected, address, chainId])
}
