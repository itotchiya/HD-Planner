/**
 * Smooth Scroll Composable
 * Lenis integration with GSAP ScrollTrigger
 */

import Lenis from 'lenis'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll(options = {}) {
    const lenis = shallowRef(null)
    const isReady = ref(false)

    const defaultOptions = {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    }

    onMounted(() => {
        // Initialize Lenis
        lenis.value = new Lenis({
            ...defaultOptions,
            ...options,
        })

        // Connect Lenis scroll to ScrollTrigger
        lenis.value.on('scroll', ScrollTrigger.update)

        // Use GSAP ticker for smooth animation loop
        gsap.ticker.add((time) => {
            lenis.value?.raf(time * 1000)
        })

        // Disable GSAP lag smoothing for best performance
        gsap.ticker.lagSmoothing(0)

        isReady.value = true
    })

    onUnmounted(() => {
        // Cleanup
        if (lenis.value) {
            lenis.value.destroy()
            lenis.value = null
        }
    })

    /**
     * Scroll to a specific element or position
     * @param {Element|string|number} target - Target element, selector, or position
     * @param {Object} options - Scroll options
     */
    const scrollTo = (target, scrollOptions = {}) => {
        if (lenis.value) {
            lenis.value.scrollTo(target, {
                offset: 0,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                ...scrollOptions,
            })
        }
    }

    /**
     * Stop scroll
     */
    const stop = () => {
        lenis.value?.stop()
    }

    /**
     * Start scroll
     */
    const start = () => {
        lenis.value?.start()
    }

    return {
        lenis,
        isReady,
        scrollTo,
        stop,
        start,
    }
}
