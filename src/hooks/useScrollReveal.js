import { useEffect, useRef } from 'react'

// Custom hook to manage ScrollReveal instance
export const useScrollReveal = () => {
  const srInstance = useRef(null)

  useEffect(() => {
    const initScrollReveal = () => {
      if (window.ScrollReveal && !srInstance.current) {
        srInstance.current = window.ScrollReveal({
          distance: '80px',
          duration: 2000,
          delay: 200,
          reset: false,
        })
      }
      return srInstance.current
    }

    // Check if ScrollReveal is already loaded
    if (window.ScrollReveal) {
      initScrollReveal()
    } else {
      // Wait for ScrollReveal to load
      const checkInterval = setInterval(() => {
        if (window.ScrollReveal) {
          initScrollReveal()
          clearInterval(checkInterval)
        }
      }, 50)

      return () => clearInterval(checkInterval)
    }
  }, [])

  return srInstance.current
}

