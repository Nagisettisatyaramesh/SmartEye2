import { SEO } from '@/components/ui/SEO'
import { Container } from '@/components/ui/Container'
import { RevealText } from '@/components/ui/RevealText'
import type { LegalBlock, LegalPageData } from '@/data/legal'

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-9 mb-3 font-display text-xl font-bold text-ink-950">{block.text}</h2>
    case 'p':
      return <p className="leading-relaxed text-neutral-700">{block.text}</p>
    case 'ul':
      return (
        <ul className="my-3 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 leading-relaxed text-neutral-700">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-500" />
              {item}
            </li>
          ))}
        </ul>
      )
  }
}

export function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <>
      <SEO title={data.title} description={`${data.title} for SmartEye eQMS, provided by S-Cube Technologies Limited.`} />

      <section className="bg-ink-950 pb-16 pt-32">
        <Container className="max-w-3xl">
          <RevealText as="h1" text={data.title} className="font-display text-3xl font-bold text-white sm:text-4xl" />
          <p className="mt-3 text-sm text-white/40">Last updated: {data.lastUpdated}</p>
        </Container>
      </section>

      <section className="bg-paper-50 py-14">
        <Container className="max-w-3xl">
          {data.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </Container>
      </section>
    </>
  )
}
