import { motion } from 'framer-motion'


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

                {/* Top Left: Piggy Bank */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 lg:left-20 bg-purple-100 rounded-[3rem] px-8 py-4 shadow-lg hidden lg:block"
                >
                    <div className="text-4xl">🐷</div>
                </motion.div>

                {/* Top Right: Clock */}
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="absolute top-10 right-0 lg:right-20 bg-blue-50 rounded-[3rem] px-8 py-4 shadow-lg hidden lg:block"
                >
                    <div className="text-4xl">⏰</div>
                </motion.div>

                {/* Bottom Left: Coins */}
                <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute bottom-0 left-10 lg:left-32 w-48 h-32 rounded-[2rem] overflow-hidden shadow-2xl hidden lg:block transform -rotate-12 bg-white"
                >
                    <img src="https://images.unsplash.com/photo-1621504450168-38c6814c1958?auto=format&fit=crop&q=80&w=400" alt="Coins" className="w-full h-full object-cover" />
                </motion.div>

                {/* Bottom Right: Abstract */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-10 right-10 lg:right-32 bg-pink-100 rounded-[3rem] px-8 py-6 shadow-lg hidden lg:block"
                >
                    <div className="flex gap-2 text-2xl">📦 💎</div>
                </motion.div>

            </div>
        </section>
    )
}
