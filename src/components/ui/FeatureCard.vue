<script setup>
/**
 * FeatureCard Component
 * Card for feature overview section with icon, title, description
 */

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="feature-card">
    <div class="feature-card__icon">
      {{ icon }}
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  padding: var(--space-8);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-card);
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: var(--color-accent-subtle);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-5);
}

.feature-card__title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.feature-card__description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
</style>
