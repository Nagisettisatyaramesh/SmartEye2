import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Accordion } from '@/components/ui/Accordion'
import { faqItems } from '@/data/faq'

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper-50 py-24 sm:py-32">
      <Container className="max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="One top QMS solution, for medical devices."
          description="Find your questions answered below."
        />
        <div className="mt-12">
          <Accordion items={faqItems.map((f) => ({ eyebrow: f.category, question: f.question, answer: f.answer }))} />
        </div>
      </Container>
    </section>
  )
}
