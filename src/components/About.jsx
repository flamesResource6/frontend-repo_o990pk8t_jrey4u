import { motion } from 'framer-motion';
import { Controller, Cpu, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Followers', value: '120K+' },
    { label: 'Hours Streamed', value: '3,500+' },
    { label: 'Games Mastered', value: '25' },
  ];

  const perks = [
    { icon: Controller, title: 'Variety + Ranked', desc: 'From speedruns to esports queues, always high-energy.' },
    { icon: Cpu, title: 'Tech Forward', desc: 'Pro setup, low latency, and interactive 3D overlays.' },
    { icon: Zap, title: 'Community First', desc: 'Weekly events, challenges, and supporter-only perks.' },
  ];

  return (
    <section id="about" className="relative bg-[#0a0013] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold">About the Stream</h2>
            <p className="mt-4 text-white/70">
              Built around competitive fun and a welcoming vibe. Expect crisp production, neon aesthetics, and gameplay that keeps you on the edge.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-bold text-violet-300">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {perks.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 ring-1 ring-violet-500/40">
                  <p.icon className="h-6 w-6 text-violet-300" />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-white/70">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
