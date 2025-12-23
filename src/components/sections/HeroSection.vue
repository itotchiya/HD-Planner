<script setup>
/**
 * HeroSection Component
 * Main hero with headline, subheadline, CTAs, and GSAP entrance animation
 */

import { ref, onMounted } from 'vue'
import { useGsap } from '../../composables/useGsap'
import BaseButton from '../ui/BaseButton.vue'

const { heroEntrance } = useGsap()

// Element refs for animations
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const ctaRef = ref(null)
const visualRef = ref(null)

onMounted(() => {
  // Hero entrance animation
  heroEntrance({
    headline: headlineRef.value,
    subheadline: subheadlineRef.value,
    cta: ctaRef.value,
    visual: visualRef.value
  })
})
</script>

<template>
  <section class="hero">
    <!-- Background gradient -->
    <div class="hero__bg">
      <div class="hero__gradient"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <!-- Label -->
        <div class="hero__label">
          <span class="hero__label-dot"></span>
          Gestion de projets, simplifiée
        </div>

        <!-- Headline -->
        <h1 ref="headlineRef" class="hero__headline heading-1">
          Planifiez clairement.<br />
          <span class="hero__headline-accent">Livrez plus vite.</span>
        </h1>

        <!-- Subheadline -->
        <p ref="subheadlineRef" class="hero__subheadline text-body-lg">
          HD Planner est un outil de gestion de projets calme et structuré pour les équipes qui privilégient la clarté au chaos. 
          Organisez vos projets, personnalisez vos workflows et visualisez votre travail comme vous le souhaitez.
        </p>

        <!-- CTAs -->
        <div ref="ctaRef" class="hero__cta">
          <BaseButton variant="primary" size="lg">
            Commencer gratuitement
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </BaseButton>
          <BaseButton variant="secondary" size="lg">
            Voir comment ça marche
          </BaseButton>
        </div>
      </div>

      <!-- Visual -->
      <div ref="visualRef" class="hero__visual">
        <div class="hero__visual-container">
          <!-- Dashboard Preview -->
          <div class="hero__dashboard">
            <div class="hero__dashboard-header">
              <div class="hero__dashboard-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="hero__dashboard-title">HD Planner</span>
            </div>
            <div class="hero__dashboard-content">
              <!-- Sidebar -->
              <div class="hero__dashboard-sidebar">
                <div class="hero__sidebar-item hero__sidebar-item--active">
                  <span class="hero__sidebar-icon">📁</span>
                  Projets
                </div>
                <div class="hero__sidebar-item">
                  <span class="hero__sidebar-icon">✓</span>
                  Tâches
                </div>
                <div class="hero__sidebar-item">
                  <span class="hero__sidebar-icon">👥</span>
                  Équipe
                </div>
              </div>
              <!-- Main Content -->
              <div class="hero__dashboard-main">
                <div class="hero__kanban">
                  <div class="hero__kanban-col">
                    <div class="hero__kanban-header">À faire</div>
                    <div class="hero__kanban-card"></div>
                    <div class="hero__kanban-card"></div>
                  </div>
                  <div class="hero__kanban-col">
                    <div class="hero__kanban-header">En cours</div>
                    <div class="hero__kanban-card hero__kanban-card--accent"></div>
                  </div>
                  <div class="hero__kanban-col">
                    <div class="hero__kanban-header">Terminé</div>
                    <div class="hero__kanban-card"></div>
                    <div class="hero__kanban-card"></div>
                    <div class="hero__kanban-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space-32) 0 var(--space-20);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__gradient {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    var(--color-accent-glow) 0%,
    transparent 60%
  );
  opacity: 0.4;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

.hero__container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
}

.hero__content {
  text-align: center;
  max-width: var(--container-narrow);
}

.hero__label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.hero__label-dot {
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.hero__headline {
  margin-bottom: var(--space-6);
}

.hero__headline-accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subheadline {
  max-width: 600px;
  margin: 0 auto var(--space-8);
}

.hero__cta {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Dashboard Visual */
.hero__visual {
  width: 100%;
  max-width: 1000px;
  perspective: 1000px;
}

.hero__visual-container {
  transform: rotateX(5deg);
  transition: transform var(--duration-slow) var(--ease-out);
}

.hero__visual-container:hover {
  transform: rotateX(0deg);
}

.hero__dashboard {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}

.hero__dashboard-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-bg-surface);
  border-bottom: 1px solid var(--color-border);
}

.hero__dashboard-dots {
  display: flex;
  gap: 6px;
}

.hero__dashboard-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border-hover);
}

.hero__dashboard-dots span:first-child {
  background: #ff5f57;
}

.hero__dashboard-dots span:nth-child(2) {
  background: #febc2e;
}

.hero__dashboard-dots span:last-child {
  background: #28c840;
}

.hero__dashboard-title {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.hero__dashboard-content {
  display: grid;
  grid-template-columns: 180px 1fr;
  min-height: 320px;
}

.hero__dashboard-sidebar {
  padding: var(--space-4);
  border-right: 1px solid var(--color-border);
}

.hero__sidebar-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.hero__sidebar-item:hover {
  background: var(--color-bg-hover);
}

.hero__sidebar-item--active {
  background: var(--color-accent-subtle);
  color: var(--color-accent-light);
}

.hero__sidebar-icon {
  font-size: 1rem;
}

.hero__dashboard-main {
  padding: var(--space-5);
}

.hero__kanban {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  height: 100%;
}

.hero__kanban-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hero__kanban-header {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  padding-bottom: var(--space-2);
}

.hero__kanban-card {
  height: 50px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.hero__kanban-card--accent {
  border-color: var(--color-accent);
  background: var(--color-accent-subtle);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-24) 0 var(--space-16);
  }

  .hero__cta {
    flex-direction: column;
    align-items: center;
  }

  .hero__dashboard-content {
    grid-template-columns: 1fr;
  }

  .hero__dashboard-sidebar {
    display: none;
  }
}
</style>
