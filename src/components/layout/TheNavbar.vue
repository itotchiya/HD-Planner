<script setup>
/**
 * TheNavbar Component
 * Sticky navigation with logo, links, and CTA
 */

import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="navbar__container container">
      <!-- Logo -->
      <a href="/" class="navbar__logo">
        <span class="navbar__logo-icon">⬡</span>
        <span class="navbar__logo-text">HD Planner</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="navbar__nav">
        <a 
          v-for="link in navLinks" 
          :key="link.label"
          :href="link.href" 
          class="navbar__link"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA Buttons -->
      <div class="navbar__actions">
        <BaseButton variant="ghost" size="sm">Sign In</BaseButton>
        <BaseButton variant="primary" size="sm">Get Started</BaseButton>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        class="navbar__mobile-toggle"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span :class="['navbar__hamburger', { 'navbar__hamburger--active': isMobileMenuOpen }]">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['navbar__mobile-menu', { 'navbar__mobile-menu--open': isMobileMenuOpen }]">
      <nav class="navbar__mobile-nav">
        <a 
          v-for="link in navLinks" 
          :key="link.label"
          :href="link.href" 
          class="navbar__mobile-link"
          @click="isMobileMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <div class="navbar__mobile-actions">
          <BaseButton variant="secondary" size="md">Sign In</BaseButton>
          <BaseButton variant="primary" size="md">Get Started</BaseButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  padding: var(--space-4) 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.navbar--scrolled {
  background: rgba(9, 9, 11, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
  color: var(--color-text-primary);
}

.navbar__logo-icon {
  color: var(--color-accent);
  font-size: 1.5rem;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.navbar__link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  transition: color var(--duration-fast) var(--ease-out);
}

.navbar__link:hover {
  color: var(--color-text-primary);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.navbar__mobile-toggle {
  display: none;
  padding: var(--space-2);
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.navbar__hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all var(--duration-fast) var(--ease-out);
}

.navbar__hamburger--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger--active span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar__mobile-menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg);
  padding: var(--space-8);
  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-out);
  overflow-y: auto;
}

.navbar__mobile-menu--open {
  transform: translateX(0);
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.navbar__mobile-link {
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__nav,
  .navbar__actions {
    display: none;
  }

  .navbar__mobile-toggle {
    display: block;
  }
}
</style>
