import { motion } from 'framer-motion'
import { Hexagon, Circle, Triangle, Square, Disc, Box } from 'lucide-react'

export function TrustedBy() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center text-white">

                    {/* Background Marquee */}
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="whitespace-nowrap opacity-10 font-bold text-[15vw] leading-none"
                        >
                            SCAN. SAVE. ACT.
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="font-['Poppins'] font-normal text-[32px] leading-[36px] text-white mb-16">
                            Partnering with top-tier brands to transform how teams capture and act on contacts.
                        </h2>

                        <div className="flex flex-wrap justify-center gap-12 lg:gap-16 opacity-80 mix-blend-overlay">
                            <div className="flex items-center gap-2"><Hexagon className="w-8 h-8 fill-current" /><span className="text-xl font-bold">Logoipsum</span></div>
                            <div className="flex items-center gap-2"><Circle className="w-8 h-8" /><span className="text-xl font-bold">logo ipsum</span></div>
                            <div className="flex items-center gap-2"><Triangle className="w-8 h-8 fill-current" /><span className="text-xl font-bold">Logoipsum</span></div>
                            <div className="flex items-center gap-2"><Square className="w-8 h-8 rotate-45 fill-current" /><span className="text-xl font-bold">Logoipsum</span></div>
                            <div className="flex items-center gap-2"><Disc className="w-8 h-8" /><span className="text-xl font-bold">IPSUM</span></div>
                            <div className="flex items-center gap-2"><Box className="w-8 h-8 fill-current" /><span className="text-xl font-bold">L-ipsum</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
