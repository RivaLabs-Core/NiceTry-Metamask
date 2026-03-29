'use client'
import { useEffect } from 'react'
import { useAccount, useSwitchChain } from 'wagmi'
import { sepolia } from 'wagmi/chains'

export function ChainGuard({ children }) {
  const { chain, isConnected } = useAccount()
  const { switchChain } = useSwitchChain()

  useEffect(() => {
    if (isConnected && chain?.id !== sepolia.id) {
      switchChain({ chainId: sepolia.id })
    }
  }, [chain, isConnected])

  return <>{children}</>
}