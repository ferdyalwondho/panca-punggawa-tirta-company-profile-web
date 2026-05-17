import type { Variants } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
}
