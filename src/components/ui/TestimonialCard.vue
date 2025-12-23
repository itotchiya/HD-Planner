<script setup>
/**
 * TestimonialCard Component
 * Quote card with author info
 */

defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="testimonial-card">
    <svg class="testimonial-card__quote-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
    
    <blockquote class="testimonial-card__quote">
      "{{ quote }}"
    </blockquote>
    
    <div class="testimonial-card__author">
      <div class="testimonial-card__avatar">
        {{ author.charAt(0) }}
      </div>
      <div class="testimonial-card__info">
        <p class="testimonial-card__name">{{ author }}</p>
        <p class="testimonial-card__role">{{ role }} at {{ company }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  position: relative;
  padding: var(--space-8);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-out);
}

.testimonial-card:hover {
  transform: scale(1.02);
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-card);
}

.testimonial-card__quote-icon {
  width: 32px;
  height: 32px;
  color: var(--color-accent);
  opacity: 0.5;
  margin-bottom: var(--space-4);
}

.testimonial-card__quote {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.testimonial-card__avatar {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-accent);
  color: var(--color-text-primary);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
}

.testimonial-card__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.testimonial-card__name {
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

.testimonial-card__role {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}
</style>
