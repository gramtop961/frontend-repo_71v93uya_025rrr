import { motion } from 'framer-motion';
import { Rocket, MessageCircle, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(76,126,255,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,224,198,0.2),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A5B4FC] shadow-sm backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-[#00E0C6]" />
            <span>Cloud Hosting by Ragil</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-[#E8ECF7] sm:text-4xl lg:text-5xl">
            Hosting cepat dan stabil, dirancang oleh orang yang membangun sistem website kamu sendiri.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Dikelola oleh pihak yang memahami struktur dan kebutuhan website kamu, memastikan semuanya berjalan lancar tanpa gangguan.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://wa.me/6282272339353?text=Halo%20Ragil%2C%20saya%20minat%20Cloud%20Hosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4C7EFF] px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(76,126,255,0.35)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#4C7EFF] focus:ring-offset-2 focus:ring-offset-black"
            >
              <Rocket className="h-4 w-4" /> Pesan Sekarang
            </a>
            <a
              href="/maintenance"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <MessageCircle className="h-4 w-4 text-[#00E0C6]" /> Lihat Paket Maintenance
            </a>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Layered glowing server stack */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#4C7EFF]/30 to-transparent blur-2xl" />
            <div className="relative grid h-full place-items-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20 * (3 - i) }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity }}
                  className="relative w-11/12"
                  style={{ zIndex: 10 + i }}
                >
                  <div className="mx-auto my-3 rounded-xl border border-white/10 bg-[#0F1730]/90 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded-full bg-white/10" />
                      <div className="h-2 w-24 rounded-full bg-[#00E0C6]/30" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-lg bg-white/5" />
                      <div className="h-10 rounded-lg bg-white/5" />
                      <div className="h-10 rounded-lg bg-white/5" />
                      <div className="col-span-3 h-2 rounded bg-white/10" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
