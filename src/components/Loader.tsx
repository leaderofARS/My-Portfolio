import { motion } from 'framer-motion'

const message = 'Welcome to my portfolio'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const letter = {
  hidden: { opacity: 0, y: 4, scale: 1 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gradient"
        >
          AS
        </motion.div>

        {/* Animated Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl font-medium tracking-wide text-foreground text-center"
        >
          {message.split('').map((ch, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading Bar */}
        <div className="relative h-1 w-64 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500"
            initial={{ x: '-100%' }}
            animate={{ x: '300%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Spinning Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
