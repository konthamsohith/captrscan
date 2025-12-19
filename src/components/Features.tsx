import { motion } from 'framer-motion'
import { ShoppingCart, Coffee, Car, Home as HomeIcon, Wallet, Play } from 'lucide-react'

export function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-4 bg-blue-50/50">
                        Key Features
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        Explore Our<br />
                        <span className="text-[rgb(0,64,193)]">Standout Features</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Card 1: Expense Tracking */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="relative h-[300px] flex items-center justify-center mb-8">
                            {/* Central Card */}
                            <div className="relative z-10 w-64 aspect-[1.58] bg-blue-600 rounded-2xl shadow-2xl text-white p-5 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm italic">Captr Card</span>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold tracking-wider">Name</div>
                                    <div className="text-white/60 text-xs mt-1">Gmail</div>
                                </div>
                            </div>

                            {/* Satellite Icons */}
                            {[
                                { Icon: ShoppingCart, x: -140, y: -60 },
                                { Icon: Play, x: -0, y: -120 },
                                { Icon: Wallet, x: 140, y: -60 },
                                { Icon: Car, x: -140, y: 60 },
                                { Icon: HomeIcon, x: 0, y: 120 },
                                { Icon: Coffee, x: 140, y: 60 },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600"
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    whileInView={{ x: item.x, y: item.y, opacity: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <item.Icon className="w-4 h-4" />
                                </motion.div>
                            ))}

                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <path d="M150 150 L 50 100" stroke="currentColor" strokeDasharray="4 4" />
                                <path d="M250 150 L 350 100" stroke="currentColor" strokeDasharray="4 4" />
                                <path d="M200 100 L 200 50" stroke="currentColor" strokeDasharray="4 4" />
                            </svg>
                        </div>
                        <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-3">AI-Powered OCR</h3>
                        <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(128,128,128)] max-w-sm">Google Gemini 2.5 Flash with front & back scanning and edge detection.</p>
                    </motion.div>

                    {/* Card 2: Smart Savings Goals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="mb-12">
                            <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-3">Smart Contact Management</h3>
                            <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(128,128,128)] max-w-sm">Search, export, and trigger actions from a single workspace.</p>
                        </div>
                        <div className="relative h-[250px] overflow-visible">
                            <div className="absolute top-0 left-0 right-0 bg-white p-6 rounded-3xl shadow-xl z-20 transform hover:-translate-y-2 transition-transform">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600"><Car className="w-6 h-6" /></div>
                                    <div className="flex-1">
                                        <div className="font-bold text-lg">Loading</div>
                                        <div className="text-xs text-gray-400">20.12.2025</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-xl text-blue-600">70%</div>
                                        <div className="text-xs text-green-500 font-bold">scanning</div>
                                    </div>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[70%] bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute top-24 left-4 right-4 bg-white/60 p-6 rounded-3xl shadow-lg z-10 blur-[1px]">
                                <div className="opacity-50 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                                    <div className="flex-1 space-y-2"><div className="w-20 h-4 bg-gray-200 rounded"></div><div className="w-10 h-3 bg-gray-200 rounded"></div></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Financial Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-visible"
                    >
                        <div className="mb-8 relative z-20">
                            <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-3">AI Assistant</h3>
                            <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(128,128,128)] max-w-sm">Natural language, contact-aware answers with instant exports.</p>
                        </div>
                        <div className="relative h-[300px] flex justify-center">
                            <div className="absolute top-0 w-[200px] bg-white rounded-[2rem] border-4 border-gray-100 shadow-2xl overflow-hidden transform rotate-12 translate-x-12 translate-y-8">
                                <div className="bg-gray-900 h-6 w-1/2 mx-auto rounded-b-xl"></div>
                                <div className="p-4 space-y-4">
                                    <div className="h-32 bg-blue-600 rounded-xl p-3 flex items-end justify-between">
                                        {[40, 70, 50, 90, 60].map((h, i) => (
                                            <div key={i} className="w-2 bg-white/30 rounded-full" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Floating Chart Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute top-20 left-4 w-48 bg-white p-4 rounded-xl shadow-xl z-20"
                            >
                                <div className="text-xs font-bold text-gray-500 mb-2">Data Extracted</div>
                                <div className="h-16 flex items-end gap-1">
                                    {[20, 35, 45, 30, 50, 40, 25].map((h, i) => (
                                        <div key={i} className="flex-1 bg-blue-100 hover:bg-blue-500 transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Card 4: Get the App */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-700 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-end text-white"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

                        {/* Abstract Shape */}
                        <div className="absolute top-12 right-12">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-white">
                                <path d="M20 20C20 20 20 50 50 50C80 50 80 80 80 80" stroke="currentColor" strokeWidth="20" strokeLinecap="round" />
                                <path d="M80 20C80 20 80 50 50 50C20 50 20 80 20 80" stroke="currentColor" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </div>

                        <div className="relative z-10 pt-48">
                            <h3 className="font-['Poppins'] font-medium text-[36px] leading-[48px] text-[rgb(255,255,255)] mb-8">Get the app</h3>
                            <button className="bg-white font-['Poppins'] font-normal text-[16px] text-[rgb(0,0,238)] px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
