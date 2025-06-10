'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@/lib/gtag'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    try {
      if (pathname) {
        pageview(pathname)
      }
    } catch (error) {
      console.error('Analytics error:', error)
    }
  }, [pathname])

  return <>{children}</>
}