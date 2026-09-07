import { type MouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RevealText } from '@/components/ui/RevealText'
import { AmbientField } from '@/components/ui/AmbientField'

export function CTA() {
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${mx}% ${my}%, rgb(95 212 255 / 0.18), transparent 65%)`

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section onMouseMove={handleMouseMove} className="bg-fine-grid relative overflow-hidden bg-ink-950 py-28 sm:py-36">
      <AmbientField variant="subtle" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <Container className="relative text-center">
        <RevealText
          as="h2"
          text="READY TO MAKE QUALITY YOUR COMPETITIVE ADVANTAGE?"
          className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold uppercase leading-[1.1] text-white sm:text-5xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          See how SmartEye can connect your entire medical device lifecycle — arrange your free tailored demo today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10"
        >
          <Button href="/#demo" size="lg" glow icon={<ArrowRight className="h-4 w-4" />}>
            Request a Demo
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
