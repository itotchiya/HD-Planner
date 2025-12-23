<script setup>
/**
 * SocialProof Component
 * Trust section with company logos
 */

import { ref, onMounted } from 'vue'
import { useGsap } from '../../composables/useGsap'

const { staggerFadeUp } = useGsap()

const sectionRef = ref(null)
const logosRef = ref(null)

const companies = [
  { name: 'TechCorp', logo: '◈' },
  { name: 'StartupX', logo: '△' },
  { name: 'AgencyFlow', logo: '◇' },
  { name: 'DesignLab', logo: '○' },
  { name: 'DevTeam', logo: '□' },
  { name: 'ProductCo', logo: '⬡' }
]

onMounted(() => {
  if (logosRef.value) {
    staggerFadeUp(logosRef.value.querySelectorAll('.social-proof__logo'), {
      trigger: sectionRef.value,
      stagger: 0.1
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="social-proof">
    <div class="container">
      <p class="social-proof__heading">
        Trusted by forward-thinking teams
      </p>
      <div ref="logosRef" class="social-proof__logos">
        <div 
          v-for="company in companies" 
          :key="company.name" 
          class="social-proof__logo"
          :title="company.name"
        >
          <span class="social-proof__logo-icon">{{ company.logo }}</span>
          <span class="social-proof__logo-name">{{ company.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-proof {
  padding: var(--space-16) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.social-proof__heading {
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-8);
}

.social-proof__logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-12);
}

.social-proof__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-muted);
  transition: color var(--duration-normal) var(--ease-out);
}

.social-proof__logo:hover {
  color: var(--color-text-secondary);
}

.social-proof__logo-icon {
  font-size: 1.5rem;
}

.social-proof__logo-name {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
}

@media (max-width: 768px) {
  .social-proof__logos {
    gap: var(--space-8);
  }

  .social-proof__logo-name {
    display: none;
  }

  .social-proof__logo-icon {
    font-size: 2rem;
  }
}
</style>
