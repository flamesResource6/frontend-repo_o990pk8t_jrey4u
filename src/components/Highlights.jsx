import { PlayCircle, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const clips = [
  {
    title: 'Epic Victory Royale',
    thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Speedrun PB Smash',
    thumb: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Ace in Ranked',
    thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-gradient-to-b from-black via-black to-[#0a0013] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold">Highlights</h2>
            <p className="mt-2 text-white/70">Top moments from streams and competitive sessions.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-violet-300">
            <Sparkles className="h-5 w-5" /> Curated for you
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, idx) => (
            <motion.div
              key={clip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={clip.thumb} alt={clip.title} className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-white/70">Clip</p>
                  <h3 className="font-semibold">{clip.title}</h3>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-600/90 px-3 py-2 text-sm font-medium shadow-lg shadow-violet-600/30 backdrop-blur-md transition group-hover:bg-violet-500">
                  <PlayCircle className="h-4 w-4" /> Play
                </button>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/30 blur-3xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-violet-300">
          <Trophy className="h-5 w-5" />
          <p className="text-sm">Streaming daily at 8PM — join live for giveaways and ranked grinds.</p>
        </div>
      </div>
    </section>
  );
}
