<script setup>
/**
 * FeatureOverview Component
 * 3 core feature cards with icons and descriptions
 */

import { ref, onMounted, nextTick } from 'vue'
import FeatureCard from '../ui/FeatureCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const features = [
  {
    icon: '📁',
    title: 'Projects & Teams',
    description: 'Organize work into projects with dedicated teams. Keep everything structured and accessible.'
  },
  {
    icon: '🏷️',
    title: 'Custom Modules',
    description: 'Label tasks with Design, Dev, Marketing, or create your own. Modules keep tasks organized.'
  },
  {
    icon: '👁️',
    title: 'Multiple Views',
    description: 'Kanban, List, or Gantt — see work your way. Switch views instantly, same data, different perspectives.'
  }
]

onMounted(async () => {
  await nextTick()
  // Simple reveal on mount with CSS transition
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="features" ref="sectionRef" class="feature-overview section">
    <div class="container">
      <div :class="['feature-overview__header', { 'is-visible': isVisible }]">
        <span class="text-label">Features</span>
        <h2 class="heading-2 feature-overview__title">
          Everything you need to ship
        </h2>
        <p class="text-body-lg feature-overview__subtitle">
          Simple, powerful tools that help you focus on what matters.
        </p>
      </div>

      <div class="feature-overview__grid">
        <FeatureCard 
          v-for="(feature, index) in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :class="['feature-overview__card', { 'is-visible': isVisible }]"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-overview {
  padding: var(--section-padding) 0;
}

.feature-overview__header {
  text-align: center;
  max-width: var(--container-text);
  margin: 0 auto var(--space-16);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.feature-overview__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-overview__title {
  margin: var(--space-4) 0;
}

.feature-overview__subtitle {
  color: var(--color-text-secondary);
}

.feature-overview__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.feature-overview__card {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.feature-overview__card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 992px) {
  .feature-overview__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-overview__grid {
    grid-template-columns: 1fr;
  }
}
</style>
