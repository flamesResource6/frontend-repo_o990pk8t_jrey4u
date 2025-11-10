import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! Updates will be sent to ${email}`);
    setEmail('');
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold">Stay in the loop</h2>
          <p className="mt-2 text-white/70">Get stream alerts, drops, and event invites straight to your inbox.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-violet-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500"
            >
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
