import { motion } from 'framer-motion'

export function Marquee() {
    return (
        <div className="bg-blue-900 py-12 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 items-center"
                >
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-white text-2xl font-bold tracking-widest uppercase opacity-80 flex items-center gap-8">
                                SCAN. SAVE. ACT. <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
