import Image from "next/image";
import Link from "next/link";
import { Aurora } from "@/components/Aurora";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import {
  approachImage,
  contact,
  contactImage,
  firm,
  heroImage,
  industries,
  services,
  stats,
  team,
  testimonials,
} from "@/lib/data";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Industries />
      <Team />
      <Testimonials />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}

// ---------------------------------------------------------------------------

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF8F4]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-[#0F1B2D] text-[#FAF8F4] font-display text-lg font-medium"
          >
            d
          </span>
          <span className="font-display text-lg tracking-tight">
            Daniel Dennis <span className="text-[#3B4A63]">& Co.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#3B4A63] md:flex">
          <a href="#services" className="hover:text-[#0F1B2D]">Services</a>
          <a href="#industries" className="hover:text-[#0F1B2D]">Industries</a>
          <a href="#team" className="hover:text-[#0F1B2D]">Team</a>
          <a href="#contact" className="hover:text-[#0F1B2D]">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#0F1B2D] px-5 py-2.5 text-sm font-medium text-[#FAF8F4] transition hover:bg-[#1E2D4A] md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/96 to-[#FAF8F4]/55"
        />
        <Aurora />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/40 via-transparent to-[#FAF8F4]"
        />
      </div>
      <Reveal as="div" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">
          {firm.city} CPAs · Established {firm.founded}
        </p>
        <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Audit, tax, and advisory <em className="not-italic text-[#B5894A]">for the organizations</em> that matter.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#3B4A63] md:text-xl">
          {firm.description} Independent since 1981.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#0F1B2D] px-7 py-3.5 text-sm font-medium text-[#FAF8F4] transition hover:bg-[#1E2D4A]"
          >
            Start a conversation
          </a>
          <a
            href="#services"
            className="rounded-full border border-[#0F1B2D]/15 bg-[#FAF8F4]/70 px-7 py-3.5 text-sm font-medium text-[#0F1B2D] backdrop-blur transition hover:border-[#0F1B2D]/40"
          >
            See what we do →
          </a>
        </div>
      </Reveal>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Stats() {
  return (
    <section className="border-b border-black/5 bg-[#F1ECE0]/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-6 py-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="font-display text-4xl tracking-tight md:text-5xl">
              <CountUp value={s.value} />
            </div>
            <div className="mt-2 text-sm text-[#3B4A63]">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Services() {
  return (
    <section id="services" className="border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">
              What we do
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl">
              The full audit, tax, and advisory bench — without the Big Four overhead.
            </h2>
            <p className="mt-6 text-[#3B4A63]">
              Every engagement is led by a partner who specializes in your sector. No handoffs to a junior team you&apos;ve never met.
            </p>
          </div>
          <div className="grid gap-px bg-black/5 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 2) * 0.06 + Math.floor(i / 2) * 0.05}
                className="bg-[#FAF8F4] p-7 transition hover:bg-[#F1ECE0]"
              >
                <h3 className="font-display text-xl tracking-tight">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3B4A63]">{s.short}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Industries() {
  return (
    <section id="industries" className="border-b border-black/5 bg-[#0F1B2D] text-[#FAF8F4]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#D4B07A]">
          Industries we know
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.1] tracking-tight md:text-5xl">
          We don&apos;t audit everyone. We audit organizations like yours, deeply.
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {industries.map((i, idx) => (
            <Reveal
              key={i.slug}
              as="article"
              delay={idx * 0.08}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1E2D4A]"
            >
              <Image
                src={i.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D] via-[#0F1B2D]/80 to-[#0F1B2D]/10"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <h3 className="font-display text-2xl tracking-tight text-[#FAF8F4] md:text-3xl">
                  {i.name}
                </h3>
                <p className="mt-3 leading-relaxed text-[#FAF8F4]/80">{i.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Team() {
  return (
    <section id="team" className="border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">
              Our people
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl">
              Eight partners. One principal. A century of experience.
            </h2>
          </div>
          <p className="max-w-md text-[#3B4A63]">
            You&apos;ll work directly with a partner from day one — and stay with that team through every busy season.
          </p>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal
              key={m.slug}
              as="article"
              delay={(i % 4) * 0.05}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#F1ECE0]">
                <Image
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-display mt-4 text-lg tracking-tight">{m.name}</h3>
              <p className="text-sm text-[#B5894A]">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#3B4A63]">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Testimonials() {
  return (
    <section className="border-b border-black/5 bg-[#FAF8F4]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">
            What clients say
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl">
            The audit you wished you&apos;d had years ago.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              as="article"
              delay={i * 0.08}
              className="group relative rounded-2xl border border-black/8 bg-[#FAF8F4] p-7 transition hover:border-[#B5894A]/40 hover:shadow-[0_24px_60px_-30px_rgba(181,137,74,0.45)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(181,137,74,0.10), transparent 40%)",
                }}
              />
              <div className="relative">
                <span aria-hidden className="font-display text-5xl leading-none text-[#B5894A]/60">
                  &ldquo;
                </span>
                <p className="-mt-2 leading-relaxed text-[#0F1B2D]">{t.quote}</p>
                <div className="mt-7 border-t border-black/8 pt-5">
                  <p className="font-display text-base tracking-tight">{t.name}</p>
                  <p className="text-sm text-[#3B4A63]">
                    {t.role} · {t.org}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="border-b border-black/5">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">
            How we work
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl">
            Engagements built around your calendar — not ours.
          </h2>
          <div className="mt-10 hidden aspect-[4/5] overflow-hidden rounded-2xl md:block">
            <div className="relative h-full w-full">
              <Image
                src={approachImage}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-10 text-[#3B4A63]">
          {[
            { n: "01", t: "Partner-led from day one", d: "A partner who specializes in your sector signs the engagement and stays with the file. No bait-and-switch." },
            { n: "02", t: "Calendar-aware planning", d: "We map our timeline to your funder reports, board meetings, and DESE/HUD/DOL deadlines — and commit to dates in writing." },
            { n: "03", t: "Fixed scope, fixed fee", d: "Audit, single audit, tax, and UFR engagements are quoted as a fixed fee. Surprises are on us, not you." },
            { n: "04", t: "A board-ready deliverable", d: "We don't hand you a 90-page draft and disappear. Every report comes with a board memo, an exit conversation, and a written set of recommendations." },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 0.07} className="flex gap-6">
              <span className="font-display text-2xl text-[#B5894A]">{step.n}</span>
              <div>
                <h3 className="font-display text-xl tracking-tight text-[#0F1B2D]">{step.t}</h3>
                <p className="mt-2 leading-relaxed">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Contact() {
  return (
    <section id="contact" className="bg-[#F1ECE0]/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#B5894A]">Get in touch</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl">
              Let&apos;s talk about your next engagement.
            </h2>
            <p className="mt-6 max-w-md text-[#3B4A63]">
              The quickest way to scope an audit, tax, or advisory engagement is a 20-minute call with a partner. We&apos;ll send a fee proposal within a week.
            </p>
            <div className="relative mt-10 hidden aspect-[5/3] overflow-hidden rounded-2xl md:block">
              <Image
                src={contactImage}
                alt=""
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <dl className="space-y-8 text-[#0F1B2D]">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#3B4A63]">Phone</dt>
              <dd className="font-display mt-2 text-2xl tracking-tight">
                <a href={`tel:${contact.phone}`} className="hover:text-[#B5894A]">{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#3B4A63]">Email</dt>
              <dd className="font-display mt-2 text-2xl tracking-tight">
                <a href={`mailto:${contact.email}`} className="hover:text-[#B5894A]">{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-[#3B4A63]">Office</dt>
              <dd className="font-display mt-2 text-2xl tracking-tight leading-snug">
                {contact.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#FAF8F4]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-[#3B4A63] md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-[#0F1B2D] text-[#FAF8F4] font-display text-sm"
          >
            d
          </span>
          <span>© {new Date().getFullYear()} {firm.name}. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-[#0F1B2D]">Services</a>
          <a href="#team" className="hover:text-[#0F1B2D]">Team</a>
          <a href="#contact" className="hover:text-[#0F1B2D]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
