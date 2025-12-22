import { motion } from 'framer-motion'
import { Camera, Save, Zap, Share2 } from 'lucide-react'


export function FeatureHighlight() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Main Content */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(0,64,193)] tracking-tight mb-8"
                    >
                        Our app helps you<br />
                        Capture contacts <br />
                        extract details with AI,<br />
                        and act instantly
                    </motion.h2>

                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-px w-12 bg-gray-300"></div>
                        <p className="font-['Poppins'] font-normal text-[18px] leading-[28px] text-[rgb(21,21,21)] text-center">Total clarity and control over <br />your professional contacts.</p>
                        <div className="h-px w-12 bg-gray-300"></div>
                    </div>


                </div>

                {/* Floating Icons */}

                {/* Top Left: Scan */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-0 left-0 lg:left-10 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Camera className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">Instant Scan</div>
                        <div className="text-xs text-gray-500">AI-powered OCR</div>
                    </div>
                </motion.div>

                {/* Top Right: Save */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                    className="absolute top-10 right-0 lg:right-10 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Save className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">Auto Save</div>
                        <div className="text-xs text-gray-500">Cloud Storage</div>
                    </div>
                </motion.div>

                {/* Bottom Left: Act */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-10 left-10 lg:left-24 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">Quick Actions</div>
                        <div className="text-xs text-gray-500">Call & Email</div>
                    </div>
                </motion.div>

                {/* Bottom Right: Connect */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 lg:right-32 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                        <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">Connect</div>
                        <div className="text-xs text-gray-500">Grow Network</div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
