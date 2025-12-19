import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PhoneMockups } from './PhoneMockups'
import { PieChart, Ticket, TrendingUp, Receipt, FileText } from 'lucide-react'

const features = [
    { icon: PieChart, title: "Works Offline", desc: "Local-first with privacy controls and GDPR compliance.", color: "bg-blue-100 text-blue-600" },
    { icon: Ticket, title: "Capture Intelligence", desc: "From scan to structured contact", color: "bg-indigo-100 text-indigo-600" },
    { icon: TrendingUp, title: "Smart search", desc: "Search by name, role, company, location, or event.", color: "bg-cyan-100 text-cyan-600" },
]

const featuresRow2 = [
    { icon: Receipt, title: "Quick actions", desc: "Email, call, add notes, or set follow-ups instantly.", color: "bg-pink-100 text-pink-600" },
    { icon: FileText, title: "Actionable Contact", desc: "Preview, confirm, and push to exports or AI workflows.", color: "bg-green-100 text-green-600" },
]

export function AdditionalFeatures() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scanX = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200])
    const idCardX = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200])

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-['Poppins'] font-normal text-[40px] leading-[52px] text-[rgb(21,21,21)]">...and more additional features</h2>
                </div>

                {/* Feature Pills Rows */}
                <div className="flex flex-col items-center gap-6 mb-20 relative z-10">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {features.map((f, i) => (
                            <FeaturePill key={i} {...f} delay={i * 0.1} />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {featuresRow2.map((f, i) => (
                            <FeaturePill key={i} {...f} delay={0.3 + (i * 0.1)} />
                        ))}
                    </div>
                </div>

                {/* Phone Mockup with Background Text */}
                <div ref={containerRef} className="relative flex justify-center mt-20 min-h-[600px] flex-col items-center">
                    {/* Background Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-10 select-none overflow-hidden whitespace-nowrap">
                        <motion.span
                            style={{ x: scanX }}
                            className="text-[15vw] font-bold font-['Poppins'] text-gray-900 mr-4"
                        >
                            SCAN
                        </motion.span>
                        <motion.span
                            style={{ x: idCardX }}
                            className="text-[15vw] font-bold font-['Poppins'] text-gray-900 ml-4"
                        >
                            CARD
                        </motion.span>
                    </div>

                    {/* Phone */}
                    <motion.div
                        className="relative z-10 scale-90 md:scale-100 origin-center"
                    >
                        <PhoneMockups />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

function FeaturePill({ icon: Icon, title, desc, color, delay }: { icon: any, title: string, desc: string, color: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-gray-50 rounded-2xl p-4 pr-12 flex items-center gap-4 hover:shadow-md transition-shadow cursor-default max-w-sm"
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <div className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgb(21,21,21)]">{title}</div>
                <div className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(128,128,128)]">{desc}</div>
            </div>
        </motion.div>
    )
}
