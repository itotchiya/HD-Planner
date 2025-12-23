<script setup>
/**
 * BenefitsSection Component
 * Short, scannable benefits focused on outcomes
 */

import { ref, onMounted, nextTick } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const benefits = [
  {
    icon: '⚡',
    title: 'Ship faster',
    description: 'Less clutter means faster decisions. Focus on building, not managing.'
  },
  {
    icon: '🎯',
    title: 'Stay focused',
    description: 'One project, one view, one goal. Cut through the noise.'
  },
  {
    icon: '🧘',
    title: 'Reduce stress',
    description: 'Calm interface, clear priorities. Work without overwhelm.'
  },
  {
    icon: '📈',
    title: 'Scale easily',
    description: 'From solo to team in minutes. Grow without friction.'
  }
]

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section ref="sectionRef" class="benefits section">
    <div class="container">
      <div :class="['benefits__header', { 'is-visible': isVisible }]">
        <span class="text-label">Why HD Planner</span>
        <h2 class="heading-2 benefits__title">
          Why teams choose clarity
        </h2>
      </div>

      <div class="benefits__grid">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="benefit.title" 
          :class="['benefit', { 'is-visible': isVisible }]"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="benefit__icon">{{ benefit.icon }}</div>
          <div class="benefit__content">
            <h3 class="benefit__title">{{ benefit.title }}</h3>
            <p class="benefit__description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  padding: var(--section-padding) 0;
  background: var(--color-bg-elevated);
}

.benefits__header {
  text-align: center;
  margin-bottom: var(--space-16);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.benefits__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.benefits__title {
  margin-top: var(--space-4);
}

.benefits__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  max-width: 900px;
  margin: 0 auto;
}

.benefit {
  display: flex;
  gap: var(--space-5);
  padding: var(--space-6);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-out);
  opacity: 0;
  transform: translateY(30px);
}

.benefit.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.benefit:hover {
  transform: translateX(4px);
  border-color: var(--color-border-hover);
}

.benefit.is-visible:hover {
  transform: translateX(4px);
}

.benefit__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: var(--color-accent-subtle);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.benefit__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.benefit__title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.benefit__description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .benefits__grid {
    grid-template-columns: 1fr;
  }
}
</style>
