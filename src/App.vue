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
    label: 'How it works',
    headline: 'A clear structure for every project',
    description: 'Admins create teams and projects. Each project holds custom modules that categorize your tasks. Simple, structured, scalable.',
    reverse: false,
    visual: 'structure'
  },
  {
    id: 'modules',
    label: 'Flexibility',
    headline: 'Modules that match your workflow',
    description: 'Design, Development, Marketing, SEO — or create your own. Modules act as smart labels that keep your tasks organized.',
    reverse: true,
    visual: 'modules'
  },
  {
    id: 'views',
    label: 'Visualization',
    headline: 'See work the way you want',
    description: 'Switch between Kanban boards, clean lists, or Gantt timelines. Same data, different perspectives.',
    reverse: false,
    visual: 'views'
  },
  {
    id: 'admin',
    label: 'Control',
    headline: 'Built for team leaders',
    description: 'Pro plan admins get full control: manage teams, assign projects, and oversee everything from a single dashboard.',
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
