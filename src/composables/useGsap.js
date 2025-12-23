/**
 * GSAP Animation Composable
 * Reusable animation functions with ScrollTrigger integration
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  /**
   * Fade up animation with scroll trigger
   * @param {Element|string} element - Target element or selector
   * @param {Object} options - Animation options
   */
  const fadeUp = (element, options = {}) => {
    const defaults = {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }

    const scrollDefaults = {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }

    return gsap.from(element, {
      ...defaults,
      ...options,
      scrollTrigger: {
        ...scrollDefaults,
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Stagger animation for multiple elements
   * @param {Element[]|string} elements - Target elements
   * @param {Object} options - Animation options
   */
  const staggerFadeUp = (elements, options = {}) => {
    const defaults = {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    }

    return gsap.from(elements, {
      ...defaults,
      ...options,
      scrollTrigger: {
        trigger: options.trigger || elements[0] || elements,
        start: options.start || 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Text reveal animation (for headlines)
   * @param {Element|string} element - Target text element
   * @param {Object} options - Animation options
   */
  const textReveal = (element, options = {}) => {
    return gsap.from(element, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      ...options,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Section reveal animation
   * @param {Element|string} section - Target section
   * @param {Object} options - Animation options
   */
  const revealSection = (section, options = {}) => {
    return gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power4.out',
      ...options,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Slide in from left/right animation
   * @param {Element|string} element - Target element
   * @param {string} direction - 'left' or 'right'
   * @param {Object} options - Animation options
   */
  const slideIn = (element, direction = 'left', options = {}) => {
    const xValue = direction === 'left' ? -100 : 100

    return gsap.from(element, {
      x: xValue,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...options,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Scale in animation
   * @param {Element|string} element - Target element
   * @param {Object} options - Animation options
   */
  const scaleIn = (element, options = {}) => {
    return gsap.from(element, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    })
  }

  /**
   * Hero entrance animation timeline
   * @param {Object} elements - Object with element references
   */
  const heroEntrance = (elements) => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    if (elements.headline) {
      tl.from(elements.headline, {
        y: 60,
        opacity: 0,
        duration: 1.2,
      })
    }

    if (elements.subheadline) {
      tl.from(
        elements.subheadline,
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        '-=0.8'
      )
    }

    if (elements.cta) {
      tl.from(
        elements.cta,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.6'
      )
    }

    if (elements.visual) {
      tl.from(
        elements.visual,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
        },
        '-=0.6'
      )
    }

    return tl
  }

  /**
   * Create a parallax effect on scroll
   * @param {Element|string} element - Target element
   * @param {number} intensity - Parallax intensity (default: 50)
   */
  const parallax = (element, intensity = 50) => {
    return gsap.to(element, {
      y: intensity,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }

  /**
   * Hover scale animation
   * @param {Element|string} element - Target element
   * @param {number} scale - Scale value (default: 1.05)
   */
  const hoverScale = (element, scale = 1.05) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale: scale,
        duration: 0.3,
        ease: 'power2.out',
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    })
  }

  /**
   * Refresh all ScrollTriggers
   */
  const refresh = () => {
    ScrollTrigger.refresh()
  }

  /**
   * Kill all ScrollTriggers (cleanup)
   */
  const killAll = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }

  return {
    gsap,
    ScrollTrigger,
    fadeUp,
    staggerFadeUp,
    textReveal,
    revealSection,
    slideIn,
    scaleIn,
    heroEntrance,
    parallax,
    hoverScale,
    refresh,
    killAll,
  }
}
