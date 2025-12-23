<script setup>
/**
 * TheFooter Component
 * Minimal footer with links and copyright
 */

const currentYear = new Date().getFullYear()

const footerLinks = {
  product: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Feuille de route', href: '#' },
    { label: 'Changelog', href: '#' }
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Centre d\'aide', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Communauté', href: '#' }
  ],
  company: [
    { label: 'À propos', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Contact', href: '#' }
  ],
  legal: [
    { label: 'Confidentialité', href: '#' },
    { label: 'Conditions', href: '#' }
  ]
}

const socialLinks = [
  { label: 'Twitter', icon: '𝕏', href: '#' },
  { label: 'GitHub', icon: '◉', href: '#' },
  { label: 'Discord', icon: '⬡', href: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <!-- Top Section -->
      <div class="footer__top">
        <!-- Brand -->
        <div class="footer__brand">
          <a href="/" class="footer__logo">
            <span class="footer__logo-icon">⬡</span>
            <span class="footer__logo-text">HD Planner</span>
          </a>
          <p class="footer__tagline">
            Planifiez clairement. Livrez plus vite.
          </p>
          <div class="footer__social">
            <a 
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              class="footer__social-link"
              :aria-label="social.label"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <div class="footer__column">
            <h4 class="footer__heading">Produit</h4>
            <ul class="footer__list">
              <li v-for="link in footerLinks.product" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__heading">Ressources</h4>
            <ul class="footer__list">
              <li v-for="link in footerLinks.resources" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__heading">Entreprise</h4>
            <ul class="footer__list">
              <li v-for="link in footerLinks.company" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__heading">Légal</h4>
            <ul class="footer__list">
              <li v-for="link in footerLinks.legal" :key="link.label">
                <a :href="link.href" class="footer__link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} HD Planner. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-16) 0 var(--space-8);
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.footer__top {
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: var(--space-16);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid var(--color-border);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
  color: var(--color-text-primary);
}

.footer__logo-icon {
  color: var(--color-accent);
  font-size: 1.5rem;
}

.footer__tagline {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  max-width: 200px;
}

.footer__social {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 1rem;
  transition: all var(--duration-fast) var(--ease-out);
}

.footer__social-link:hover {
  color: var(--color-text-primary);
  border-color: var(--color-border-hover);
  background: var(--color-bg-hover);
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

.footer__heading {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__link {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  transition: color var(--duration-fast) var(--ease-out);
}

.footer__link:hover {
  color: var(--color-text-primary);
}

.footer__bottom {
  padding-top: var(--space-8);
}

.footer__copyright {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .footer__links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer__links {
    grid-template-columns: 1fr;
  }
}
</style>
