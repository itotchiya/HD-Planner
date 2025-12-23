<script setup>
/**
 * PricingCard Component
 * Pricing plan card with features list
 */

import BaseButton from './BaseButton.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  period: {
    type: String,
    default: '/month'
  },
  features: {
    type: Array,
    required: true
  },
  cta: {
    type: String,
    default: 'Get Started'
  },
  highlighted: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['pricing-card', { 'pricing-card--highlighted': highlighted }]">
    <div v-if="highlighted" class="pricing-card__badge">Popular</div>
    
    <h3 class="pricing-card__name">{{ name }}</h3>
    
    <div class="pricing-card__price">
      <span class="pricing-card__amount">{{ price }}</span>
      <span class="pricing-card__period">{{ period }}</span>
    </div>
    
    <ul class="pricing-card__features">
      <li 
        v-for="(feature, index) in features" 
        :key="index"
        class="pricing-card__feature"
      >
        <svg class="pricing-card__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        {{ feature }}
      </li>
    </ul>
    
    <BaseButton 
      :variant="highlighted ? 'primary' : 'secondary'"
      size="lg"
      class="pricing-card__cta"
    >
      {{ cta }}
    </BaseButton>
  </div>
</template>

<style scoped>
.pricing-card {
  position: relative;
  padding: var(--space-8);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  transition: all var(--duration-normal) var(--ease-out);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card--highlighted {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.pricing-card__badge {
  position: absolute;
  top: calc(-1 * var(--space-3));
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-1) var(--space-4);
  background: var(--gradient-accent);
  color: var(--color-text-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.pricing-card__name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  margin-bottom: var(--space-6);
}

.pricing-card__amount {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
}

.pricing-card__period {
  font-size: var(--text-base);
  color: var(--color-text-tertiary);
}

.pricing-card__features {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.pricing-card__feature {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
}

.pricing-card__check {
  width: 18px;
  height: 18px;
  color: var(--color-accent);
  flex-shrink: 0;
}

.pricing-card__cta {
  width: 100%;
}
</style>
