import { motion } from 'framer-motion'
import { Cloud, Share2, Home, Briefcase, Globe, Building2 } from 'lucide-react'

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

                        <div className="flex flex-wrap justify-center gap-12 lg:gap-16 opacity-80 items-center">
                            {/* Salesforce */}
                            <div className="flex items-center gap-2"><Cloud className="w-8 h-8 fill-current" /><span className="text-xl font-bold tracking-tight">Salesforce</span></div>
                            {/* HubSpot */}
                            <div className="flex items-center gap-2"><Share2 className="w-7 h-7" /><span className="text-xl font-bold tracking-tight">HubSpot</span></div>
                            {/* RE/MAX */}
                            <div className="flex items-center gap-2"><Home className="w-7 h-7 fill-current" /><span className="text-xl font-bold tracking-tight">RE/MAX</span></div>
                            {/* Deloitte */}
                            <div className="flex items-center gap-2"><Briefcase className="w-7 h-7 fill-current" /><span className="text-xl font-bold tracking-tight">Deloitte</span></div>
                            {/* CBRE */}
                            <div className="flex items-center gap-2"><Globe className="w-7 h-7" /><span className="text-xl font-bold tracking-tight">CBRE</span></div>
                            {/* Oracle */}
                            <div className="flex items-center gap-2"><Building2 className="w-7 h-7 fill-current" /><span className="text-xl font-bold tracking-tight">Oracle</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
