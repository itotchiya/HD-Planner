<script setup>
/**
 * PricingSection Component
 * Free vs Pro plan comparison
 */

import { ref, onMounted, nextTick } from 'vue'
import PricingCard from '../ui/PricingCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const plans = [
  {
    name: 'Gratuit',
    price: '0€',
    period: '/mois',
    features: [
      'Jusqu\'à 3 membres',
      '2 projets',
      'Vue Kanban uniquement',
      'Modules par défaut',
      'Support communautaire'
    ],
    cta: 'Commencer gratuitement',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '12€',
    period: '/utilisateur/mois',
    features: [
      'Membres illimités',
      'Projets illimités',
      'Toutes les vues (Kanban, Liste, Gantt)',
      'Modules personnalisés',
      'Contrôles admin',
      'Support prioritaire'
    ],
    cta: 'Passer à Pro',
    highlighted: true
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
  <section id="pricing" ref="sectionRef" class="pricing-section section">
    <div class="container">
      <div :class="['pricing-section__header', { 'is-visible': isVisible }]">
        <span class="text-label">Tarifs</span>
        <h2 class="heading-2 pricing-section__title">
          Tarification simple et transparente
        </h2>
        <p class="text-body-lg pricing-section__subtitle">
          Commencez gratuitement, évoluez quand vous en avez besoin.
        </p>
      </div>

      <div class="pricing-section__grid">
        <PricingCard 
          v-for="(plan, index) in plans"
          :key="plan.name"
          :name="plan.name"
          :price="plan.price"
          :period="plan.period"
          :features="plan.features"
          :cta="plan.cta"
          :highlighted="plan.highlighted"
          :class="['pricing', { 'is-visible': isVisible }]"
          :style="{ transitionDelay: `${index * 0.15}s` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: var(--section-padding) 0;
  background: var(--color-bg-elevated);
}

.pricing-section__header {
  text-align: center;
  margin-bottom: var(--space-16);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.pricing-section__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.pricing-section__title {
  margin: var(--space-4) 0;
}

.pricing-section__subtitle {
  color: var(--color-text-secondary);
}

.pricing-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  max-width: 800px;
  margin: 0 auto;
}

.pricing {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.pricing.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .pricing-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
