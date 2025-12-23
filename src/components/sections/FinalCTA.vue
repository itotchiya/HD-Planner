<script setup>
/**
 * FinalCTA Component
 * Strong closing call to action
 */

import { ref, onMounted } from 'vue'
import { useGsap } from '../../composables/useGsap'
import BaseButton from '../ui/BaseButton.vue'

const { fadeUp } = useGsap()

const sectionRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  fadeUp(contentRef.value, { 
    scrollTrigger: { trigger: sectionRef.value },
    y: 80
  })
})
</script>

<template>
  <section ref="sectionRef" class="final-cta section">
    <!-- Background -->
    <div class="final-cta__bg">
      <div class="final-cta__gradient"></div>
    </div>

    <div class="container">
      <div ref="contentRef" class="final-cta__content">
        <h2 class="heading-2 final-cta__headline">
          Ready to plan with clarity?
        </h2>
        <p class="text-body-lg final-cta__subheadline">
          Join thousands of teams shipping better work, faster.
        </p>
        <div class="final-cta__actions">
          <BaseButton variant="primary" size="lg">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </BaseButton>
        </div>
        <p class="final-cta__note">
          No credit card required • Free forever for small teams
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  position: relative;
  padding: var(--space-32) 0;
  overflow: hidden;
}

.final-cta__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.final-cta__gradient {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    var(--color-accent-glow) 0%,
    transparent 50%
  );
  opacity: 0.3;
}

.final-cta__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: var(--container-text);
  margin: 0 auto;
}

.final-cta__headline {
  margin-bottom: var(--space-4);
}

.final-cta__subheadline {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.final-cta__actions {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-6);
}

.final-cta__note {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}
</style>
