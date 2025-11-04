import { motion } from 'framer-motion';
import { Check, MessageSquare } from 'lucide-react';

const features = [
  'CPU: 2 vCPU',
  'RAM: 4 GB',
  'Storage: 20 GB SSD',
  'Bandwidth: Unlimited',
  'Free SSL & SFTP access',
  'Migration & staging test',
];

export default function PricingSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center text-2xl font-semibold text-[#E8ECF7] sm:text-3xl"
      >
        Satu harga, semua sudah termasuk
      </motion.h3>

      <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(76,126,255,0.22),transparent_60%)] blur-2xl" />

        <div className="relative">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#00E0C6]" /> Cloud Hosting
          </div>
          <h4 className="mb-1 text-xl font-semibold text-[#E8ECF7]">Rp 200.000 / bulan (min. 1 tahun)</h4>
          <p className="mb-4 text-sm text-white/60">Harga transparan tanpa biaya tersembunyi.</p>

          <ul className="mb-6 grid gap-2">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-center gap-3 text-white/80"
              >
                <Check className="h-4 w-4 text-[#00E0C6]" /> {f}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/6282272339353?text=Halo%20Ragil%2C%20saya%20pesan%20Cloud%20Hosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4C7EFF] px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(76,126,255,0.35)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#4C7EFF] focus:ring-offset-2 focus:ring-offset-black"
            >
              Pesan Sekarang
            </a>
            <a
              href="https://wa.me/6282272339353?text=Halo%20Ragil%2C%20saya%20ingin%20konsultasi%20hosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <MessageSquare className="h-4 w-4 text-[#00E0C6]" /> Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-xl font-semibold text-[#E8ECF7]"
        >
          Konsultasi gratis, tanpa basa-basi.
        </motion.h4>
        <p className="mx-auto mb-4 max-w-2xl text-white/70">
          Kirim pesan dan temukan solusi hosting terbaik untuk website kamu.
        </p>
        <a
          href="https://wa.me/6282272339353?text=Halo%20Ragil%2C%20saya%20ingin%20konsultasi%20hosting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#00E0C6] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#00E0C6] focus:ring-offset-2 focus:ring-offset-black"
        >
          <MessageSquare className="h-4 w-4" /> Chat Sekarang
        </a>
      </div>
    </section>
  );
}
