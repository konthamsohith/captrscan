import { motion } from 'framer-motion'
import { HeroPhoneMockup } from './HeroPhoneMockup'
import { ArrowUpRight, Plus } from 'lucide-react'

export function Hero() {
    return (
        <section id="home" className="relative pt-32 lg:pt-40 pb-20 bg-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Headline */}
                    <div className="lg:col-span-4 pt-10 lg:pt-20 lg:pl-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="font-['Poppins'] font-normal text-4xl lg:text-[64px] lg:leading-[72px] text-[rgb(21,21,21)] mb-6 tracking-tight">
                                Never lose a business card again<br />
                                <span className="text-[rgb(102,102,102)]">just scan it.</span>
                            </h1>

                            <div className="flex items-center gap-4">
                                <a href="#download" className="bg-blue-50 font-['Poppins'] font-normal text-[18px] text-[rgb(0,0,238)] px-8 py-3.5 rounded-full hover:bg-blue-100 transition-colors inline-block text-center">
                                    Start Free Trial
                                </a>
                                <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-transform hover:scale-105">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Column: Phone */}
                    <div className="lg:col-span-5 relative h-[600px] flex justify-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0, rotate: -12 }}
                            animate={{ y: 0, opacity: 1, rotate: -12 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20 scale-110 lg:scale-125 origin-top-center"
                        >
                            <HeroPhoneMockup />
                        </motion.div>
                    </div>

                    {/* Right Column: Description */}
                    <div className="lg:col-span-3 pt-32 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-12 h-12 flex items-center justify-center text-blue-400 mb-6">
                                <Plus className="w-10 h-10 stroke-1" />
                            </div>

                            <p className="font-['Poppins'] font-normal text-[18px] leading-[28px] text-[rgb(0,0,0)] mb-12">
                                All-in-one platform for capturing contacts, extracting details with AI, and managing your professional network. From scan to action in seconds.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="font-['Poppins'] font-normal text-[40px] leading-[52px] text-[rgb(0,0,0)] mb-1">2.3M+</div>
                                    <div className="font-sans font-normal text-[12px] leading-normal text-[rgb(0,0,0)]">Trusted to use by millions<br />users over 140 countries</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
