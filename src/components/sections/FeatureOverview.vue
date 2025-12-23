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
    title: 'Projets & Équipes',
    description: 'Organisez le travail en projets avec des équipes dédiées. Gardez tout structuré et accessible.'
  },
  {
    icon: '🏷️',
    title: 'Modules personnalisés',
    description: 'Étiquetez les tâches avec Design, Dev, Marketing, ou créez les vôtres. Les modules gardent les tâches organisées.'
  },
  {
    icon: '👁️',
    title: 'Vues multiples',
    description: 'Kanban, Liste ou Gantt — visualisez le travail à votre façon. Changez de vue instantanément, mêmes données, différentes perspectives.'
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
        <span class="text-label">Fonctionnalités</span>
        <h2 class="heading-2 feature-overview__title">
          Tout ce qu'il vous faut pour livrer
        </h2>
        <p class="text-body-lg feature-overview__subtitle">
          Des outils simples et puissants qui vous aident à vous concentrer sur l'essentiel.
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
