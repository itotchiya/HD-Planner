<script setup>
import { onMounted } from 'vue'
import { useSmoothScroll } from './composables/useSmoothScroll'

// Layout Components
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'

// Section Components
import HeroSection from './components/sections/HeroSection.vue'
import SocialProof from './components/sections/SocialProof.vue'
import FeatureOverview from './components/sections/FeatureOverview.vue'
import DeepFeature from './components/sections/DeepFeature.vue'
import BenefitsSection from './components/sections/BenefitsSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import FinalCTA from './components/sections/FinalCTA.vue'

// Initialize smooth scroll
const { isReady } = useSmoothScroll()

// Deep feature sections data
const deepFeatures = [
  {
    id: 'how-it-works',
    label: 'Comment ça marche',
    headline: 'Une structure claire pour chaque projet',
    description: 'Les admins créent des équipes et des projets. Chaque projet contient des modules personnalisés qui catégorisent vos tâches. Simple, structuré, évolutif.',
    reverse: false,
    visual: 'structure'
  },
  {
    id: 'modules',
    label: 'Flexibilité',
    headline: 'Des modules adaptés à votre workflow',
    description: 'Design, Développement, Marketing, SEO — ou créez les vôtres. Les modules agissent comme des étiquettes intelligentes qui gardent vos tâches organisées.',
    reverse: true,
    visual: 'modules'
  },
  {
    id: 'views',
    label: 'Visualisation',
    headline: 'Voyez le travail comme vous le souhaitez',
    description: 'Basculez entre tableaux Kanban, listes claires ou timelines Gantt. Mêmes données, différentes perspectives.',
    reverse: false,
    visual: 'views'
  },
  {
    id: 'admin',
    label: 'Contrôle',
    headline: 'Conçu pour les chefs d\'équipe',
    description: 'Les admins Pro ont le contrôle total : gérez les équipes, assignez des projets et supervisez tout depuis un seul tableau de bord.',
    reverse: true,
    visual: 'admin'
  }
]
</script>

<template>
  <div class="app">
    <TheNavbar />
    
    <main>
      <HeroSection />
      <SocialProof />
      <FeatureOverview />
      
      <!-- Deep Feature Sections -->
      <DeepFeature 
        v-for="feature in deepFeatures"
        :key="feature.id"
        :label="feature.label"
        :headline="feature.headline"
        :description="feature.description"
        :reverse="feature.reverse"
        :visual="feature.visual"
      />
      
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
    </main>
    
    <TheFooter />
  </div>
</template>

<style scoped>
.app {
  position: relative;
  overflow-x: hidden;
}

main {
  position: relative;
}
</style>
