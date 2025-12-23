<script setup>
/**
 * BaseButton Component
 * Reusable button with variants: primary, secondary, ghost
 */

defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, ghost
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  href: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :disabled="disabled"
    :class="['btn', `btn--${variant}`, `btn--${size}`]"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: var(--font-medium);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  white-space: nowrap;
  text-decoration: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn--md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* Primary Variant */
.btn--primary {
  background: var(--color-accent);
  color: var(--color-text-primary);
  border: none;
}

.btn--primary:hover:not(:disabled) {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn--primary:active:not(:disabled) {
  transform: translateY(0);
}

/* Secondary Variant */
.btn--secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.btn--secondary:hover:not(:disabled) {
  border-color: var(--color-border-hover);
  background: var(--color-bg-hover);
}

/* Ghost Variant */
.btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
}

.btn--ghost:hover:not(:disabled) {
  color: var(--color-text-primary);
  background: var(--color-bg-hover);
}
</style>
