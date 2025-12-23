<script setup>
/**
 * TestimonialsSection Component
 * Minimal quotes from users
 */

import { ref, onMounted, nextTick } from 'vue'
import TestimonialCard from '../ui/TestimonialCard.vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const testimonials = [
  {
    quote: "Finally, a tool that doesn't overwhelm our team. We can actually focus on the work.",
    author: 'Sarah Mitchell',
    role: 'Product Lead',
    company: 'StartupX'
  },
  {
    quote: "The clarity is unmatched. We shipped 2x faster after switching to HD Planner.",
    author: 'James Kim',
    role: 'CTO',
    company: 'AgencyFlow'
  },
  {
    quote: "Simple, structured, and it just works. Exactly what I needed as a freelancer.",
    author: 'Maria Lopez',
    role: 'Freelance Designer',
    company: 'Self-employed'
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
  <section ref="sectionRef" class="testimonials section">
    <div class="container">
      <div :class="['testimonials__header', { 'is-visible': isVisible }]">
        <span class="text-label">Testimonials</span>
        <h2 class="heading-2 testimonials__title">
          What our users say
        </h2>
      </div>

      <div class="testimonials__grid">
        <TestimonialCard 
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          :quote="testimonial.quote"
          :author="testimonial.author"
          :role="testimonial.role"
          :company="testimonial.company"
          :class="['testimonial', { 'is-visible': isVisible }]"
          :style="{ transitionDelay: `${index * 0.15}s` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: var(--section-padding) 0;
}

.testimonials__header {
  text-align: center;
  margin-bottom: var(--space-16);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.testimonials__header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.testimonials__title {
  margin-top: var(--space-4);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.testimonial {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.testimonial.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 992px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
