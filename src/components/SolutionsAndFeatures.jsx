import { motion } from 'framer-motion';
import { Settings, Zap, ShieldCheck, Layers } from 'lucide-react';

const solutions = [
  'Server siap pakai untuk WordPress dan webapp.',
  'Migrasi aman dengan uji coba sebelum live.',
  'SSL aktif otomatis.',
  'Akses penuh tanpa batasan tersembunyi.',
];

const features = [
  'Dikelola oleh orang yang tahu cara menjaga performa website.',
  'Support langsung via WhatsApp.',
  'Setup dan migrasi terdokumentasi jelas.',
  'Konsultasi kebutuhan sebelum setup.',
];

export default function SolutionsAndFeatures() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Visual Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1730] to-[#0B142A] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            {/* gradient lines */}
            <div className="pointer-events-none absolute inset-0 opacity-60 [background:repeating-linear-gradient(135deg,transparent_0px,transparent_12px,rgba(76,126,255,0.08)_12px,rgba(76,126,255,0.08)_24px)]" />
            <div className="relative rounded-xl border border-white/5 bg-black/20 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#4C7EFF]" />
                <span className="h-2 w-2 rounded-full bg-[#00E0C6]" />
                <span className="h-2 w-2 rounded-full bg-[#A5B4FC]" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 rounded-lg bg-white/5 p-3">
                  <div className="h-4 w-24 rounded bg-white/10" />
                  <div className="mt-3 h-2 w-32 rounded bg-white/10" />
                  <div className="mt-2 h-2 w-40 rounded bg-white/10" />
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="h-16 rounded bg-[#4C7EFF]/20" />
                </div>
                <div className="col-span-4 mt-3 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-lg bg-white/5" />
                  <div className="h-10 rounded-lg bg-white/5" />
                  <div className="h-10 rounded-lg bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-2xl font-semibold text-[#E8ECF7]"
            >
              Hosting yang dirancang agar kamu tidak perlu mikir teknis
            </motion.h3>
            <ul className="grid gap-3">
              {solutions.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80"
                >
                  <Zap className="h-4 w-4 text-[#00E0C6]" /> {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xl font-semibold text-[#E8ECF7]"
            >
              Kenapa hosting ini berbeda
            </motion.h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4"
                >
                  {[Settings, ShieldCheck, Layers, Zap][i % 4]({ className: 'h-4 w-4 text-[#A5B4FC] mt-1' })}
                  <p className="text-white/80">{f}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
