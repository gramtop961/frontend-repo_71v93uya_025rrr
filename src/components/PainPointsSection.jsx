import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const bullets = [
  'Waktu habis untuk mengatur server, bukan mengembangkan bisnis.',
  'Website lambat atau error saat traffic naik.',
  'Support lambat dan membingungkan.',
  'Istilah teknis bikin frustrasi.',
];

export default function PainPointsSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center text-2xl font-semibold text-[#E8ECF7] sm:text-3xl"
      >
        Hosting yang rumit bisa jadi penghambat pertumbuhan bisnis
      </motion.h2>

      <div className="grid gap-4 md:grid-cols-2">
        {bullets.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur"
          >
            <div className="mt-0.5 rounded-lg bg-[#4C7EFF]/20 p-2">
              <AlertTriangle className="h-4 w-4 text-[#A5B4FC]" />
            </div>
            <p className="text-white/80">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
