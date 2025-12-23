<script setup>
/**
 * DeepFeature Component
 * Reusable alternating text/visual section for deep feature explanations
 */

import { ref, onMounted } from 'vue'
import { useGsap } from '../../composables/useGsap'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  },
  visual: {
    type: String,
    default: 'default'
  }
})

const { fadeUp, slideIn } = useGsap()

const sectionRef = ref(null)
const contentRef = ref(null)
const visualRef = ref(null)

onMounted(() => {
  fadeUp(contentRef.value, { scrollTrigger: { trigger: sectionRef.value } })
  slideIn(visualRef.value, props.reverse ? 'left' : 'right', {
    scrollTrigger: { trigger: sectionRef.value },
    delay: 0.2
  })
})
</script>

<template>
  <section ref="sectionRef" class="deep-feature section">
    <div class="container">
      <div :class="['deep-feature__grid', { 'deep-feature__grid--reverse': reverse }]">
        <!-- Content -->
        <div ref="contentRef" class="deep-feature__content">
          <span class="text-label">{{ label }}</span>
          <h2 class="heading-3 deep-feature__headline">{{ headline }}</h2>
          <p class="text-body-lg deep-feature__description">{{ description }}</p>
        </div>

        <!-- Visual -->
        <div ref="visualRef" class="deep-feature__visual">
          <!-- Structure Visual -->
          <div v-if="visual === 'structure'" class="visual visual--structure">
            <div class="visual__node visual__node--admin">
              <span class="visual__icon">👤</span> Admin
            </div>
            <div class="visual__connector"></div>
            <div class="visual__row">
              <div class="visual__node visual__node--team">
                <span class="visual__icon">👥</span> Équipe A
              </div>
              <div class="visual__node visual__node--team">
                <span class="visual__icon">👥</span> Équipe B
              </div>
            </div>
            <div class="visual__connector"></div>
            <div class="visual__row">
              <div class="visual__node visual__node--project">
                <span class="visual__icon">📁</span> Projet
              </div>
            </div>
            <div class="visual__connector"></div>
            <div class="visual__row">
              <div class="visual__tag">Design</div>
              <div class="visual__tag">Dev</div>
              <div class="visual__tag">Marketing</div>
            </div>
          </div>

          <!-- Modules Visual -->
          <div v-else-if="visual === 'modules'" class="visual visual--modules">
            <div class="modules__grid">
              <div class="module module--design">
                <span class="module__icon">🎨</span>
                <span class="module__name">Design</span>
              </div>
              <div class="module module--dev">
                <span class="module__icon">💻</span>
                <span class="module__name">Développement</span>
              </div>
              <div class="module module--marketing">
                <span class="module__icon">📣</span>
                <span class="module__name">Marketing</span>
              </div>
              <div class="module module--seo">
                <span class="module__icon">🔍</span>
                <span class="module__name">SEO</span>
              </div>
              <div class="module module--custom">
                <span class="module__icon">➕</span>
                <span class="module__name">Personnalisé</span>
              </div>
            </div>
          </div>

          <!-- Views Visual -->
          <div v-else-if="visual === 'views'" class="visual visual--views">
            <div class="views__tabs">
              <div class="views__tab views__tab--active">Kanban</div>
              <div class="views__tab">Liste</div>
              <div class="views__tab">Gantt</div>
            </div>
            <div class="views__preview">
              <div class="views__kanban">
                <div class="views__column">
                  <div class="views__card"></div>
                  <div class="views__card"></div>
                </div>
                <div class="views__column">
                  <div class="views__card views__card--accent"></div>
                </div>
                <div class="views__column">
                  <div class="views__card"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Admin Visual -->
          <div v-else-if="visual === 'admin'" class="visual visual--admin">
            <div class="admin__header">
              <span class="admin__badge">Pro</span>
              Tableau de bord Admin
            </div>
            <div class="admin__stats">
              <div class="admin__stat">
                <span class="admin__stat-value">12</span>
                <span class="admin__stat-label">Projets</span>
              </div>
              <div class="admin__stat">
                <span class="admin__stat-value">48</span>
                <span class="admin__stat-label">Tâches</span>
              </div>
              <div class="admin__stat">
                <span class="admin__stat-value">8</span>
                <span class="admin__stat-label">Membres</span>
              </div>
            </div>
          </div>

          <!-- Default Visual -->
          <div v-else class="visual visual--default">
            <div class="visual__placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deep-feature {
  padding: var(--section-padding) 0;
}

.deep-feature__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.deep-feature__grid--reverse {
  direction: rtl;
}

.deep-feature__grid--reverse > * {
  direction: ltr;
}

.deep-feature__content {
  max-width: 500px;
}

.deep-feature__headline {
  margin: var(--space-4) 0;
  color: var(--color-text-primary);
}

.deep-feature__description {
  color: var(--color-text-secondary);
}

.deep-feature__visual {
  display: flex;
  justify-content: center;
}

/* Visual Containers */
.visual {
  width: 100%;
  max-width: 450px;
  padding: var(--space-8);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

/* Structure Visual */
.visual--structure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.visual__node {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.visual__node--admin {
  border-color: var(--color-accent);
  color: var(--color-accent-light);
}

.visual__connector {
  width: 2px;
  height: 20px;
  background: var(--color-border);
}

.visual__row {
  display: flex;
  gap: var(--space-4);
}

.visual__tag {
  padding: var(--space-2) var(--space-4);
  background: var(--color-accent-subtle);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  color: var(--color-accent-light);
}

/* Modules Visual */
.modules__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.module {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--duration-normal) var(--ease-out);
}

.module:hover {
  transform: translateY(-2px);
  border-color: var(--color-border-hover);
}

.module__icon {
  font-size: 1.5rem;
}

.module__name {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

.module--custom {
  border-style: dashed;
}

/* Views Visual */
.visual--views {
  padding: 0;
  overflow: hidden;
}

.views__tabs {
  display: flex;
  border-bottom: 1px solid var(--color-border);
}

.views__tab {
  flex: 1;
  padding: var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.views__tab--active {
  color: var(--color-accent-light);
  background: var(--color-accent-subtle);
}

.views__preview {
  padding: var(--space-6);
}

.views__kanban {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.views__column {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.views__card {
  height: 40px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.views__card--accent {
  border-color: var(--color-accent);
  background: var(--color-accent-subtle);
}

/* Admin Visual */
.admin__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.admin__badge {
  padding: var(--space-1) var(--space-3);
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
}

.admin__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.admin__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-4);
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.admin__stat-value {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
}

.admin__stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

/* Responsive */
@media (max-width: 768px) {
  .deep-feature__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .deep-feature__grid--reverse {
    direction: ltr;
  }

  .deep-feature__content {
    text-align: center;
    max-width: 100%;
  }

  .modules__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
