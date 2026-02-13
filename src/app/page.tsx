"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 radial-glow pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Calculus Singularity"
              width={36}
              height={29}
            />
            <span className="font-[var(--font-orbitron)] font-medium text-sm tracking-wide text-foreground/90">
              CALCULUS SINGULARITY
            </span>
          </div>
          <a 
            href="https://github.com/calculus-singularity" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-14">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            {/* Logo with title */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              {/* Top title */}
              <h1 className="font-[var(--font-orbitron)] text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-[0.2em] text-foreground/90 mb-3">
                CALCULUS
              </h1>
              
              {/* Logo */}
              <Image
                src="/logo.svg"
                alt="Calculus Singularity Logo"
                width={240}
                height={192}
                className="animate-float"
              />
              
              {/* Bottom title */}
              <span className="font-[var(--font-orbitron)] text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-[0.2em] text-foreground/90 mt-3">
                SINGULARITY
              </span>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted max-w-2xl mx-auto leading-relaxed"
            >
              An early-stage team based in China, passionate about open source, AI,
              functional programming, and PL theory — building SaaS and language toolchains.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="mailto:lampese@calculus-singularity.com"
              className="text-lg text-accent hover:text-accent-hover transition-colors"
            >
              We&apos;re hiring.
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-sm text-muted">
            <Image
              src="/logo.svg"
              alt="Calculus Singularity"
              width={20}
              height={16}
            />
            <span>© {new Date().getFullYear()} Calculus Singularity</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
