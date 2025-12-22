import { motion } from 'framer-motion'
import { Sparkles, Zap, Layers, Crop, ScanLine, Brain, Search, FileDown, Share2, Tags, ListFilter, Send } from 'lucide-react'

export function Features() {
    return (
        <section id="features" className="py-24 bg-white">
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
                        <div className="relative h-[400px] flex items-center justify-center mb-8">
                            {/* Central Card */}
                            <div className="relative z-10 w-64 aspect-[1.58] bg-blue-600 rounded-2xl shadow-2xl text-white p-5 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm italic">ID Card</span>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold tracking-wider">Sarah Connor</div>
                                    <div className="text-white/60 text-xs mt-1">sarah@tech.com</div>
                                    <div className="text-white/60 text-xs mt-1">+91 63041 96183</div>
                                </div>
                            </div>

                            {/* Connecting Lines (SVG) */}
                            <div className="absolute top-1/2 left-1/2 w-0 h-0 overflow-visible pointer-events-none opacity-20">
                                <svg className="overflow-visible">
                                    <path d="M0 0 L -190 -90" stroke="currentColor" strokeDasharray="4 4" />
                                    <path d="M0 0 L 0 -170" stroke="currentColor" strokeDasharray="4 4" />
                                    <path d="M0 0 L 190 -90" stroke="currentColor" strokeDasharray="4 4" />
                                    <path d="M0 0 L -190 90" stroke="currentColor" strokeDasharray="4 4" />
                                    <path d="M0 0 L 0 170" stroke="currentColor" strokeDasharray="4 4" />
                                    <path d="M0 0 L 190 90" stroke="currentColor" strokeDasharray="4 4" />
                                </svg>
                            </div>

                            {/* Satellite Icons */}
                            {[
                                { Icon: ScanLine, x: -190, y: -90 },
                                { Icon: Brain, x: -0, y: -170 },
                                { Icon: Sparkles, x: 190, y: -90 },
                                { Icon: Zap, x: -190, y: 90 },
                                { Icon: Layers, x: 0, y: 170 },
                                { Icon: Crop, x: 190, y: 90 },
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
                                <div className="space-y-4">
                                    {/* Mock Search Bar */}
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <Search className="w-5 h-5 text-gray-400" />
                                        <div className="flex-1 text-xs font-medium text-gray-400">Search contacts...</div>
                                        <ListFilter className="w-4 h-4 text-gray-400" />
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-4 gap-2">
                                        <div className="bg-blue-50 p-2 rounded-xl flex flex-col items-center gap-1.5 hover:bg-blue-100 transition-colors cursor-pointer">
                                            <FileDown className="w-4 h-4 text-blue-600" />
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-blue-700">Export</span>
                                        </div>
                                        <div className="bg-purple-50 p-2 rounded-xl flex flex-col items-center gap-1.5 hover:bg-purple-100 transition-colors cursor-pointer">
                                            <Zap className="w-4 h-4 text-purple-600" />
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-purple-700">Action</span>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-xl flex flex-col items-center gap-1.5 hover:bg-green-100 transition-colors cursor-pointer">
                                            <Share2 className="w-4 h-4 text-green-600" />
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-green-700">Share</span>
                                        </div>
                                        <div className="bg-orange-50 p-2 rounded-xl flex flex-col items-center gap-1.5 hover:bg-orange-100 transition-colors cursor-pointer">
                                            <Tags className="w-4 h-4 text-orange-600" />
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-orange-700">Tag</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-28 left-4 right-4 bg-white/60 p-6 rounded-3xl shadow-lg z-10 blur-[1px]">
                                <div className="space-y-3 opacity-50">
                                    <div className="h-8 bg-gray-100 rounded-xl"></div>
                                    <div className="h-8 bg-gray-100 rounded-xl"></div>
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
                        <div className="relative h-[300px] w-full flex items-center justify-center">
                            {/* Chat Interface */}
                            <div className="absolute inset-x-4 md:inset-x-12 top-0 bottom-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                                {/* Chat Header */}
                                <div className="p-4 border-b border-gray-50 flex items-center gap-3 bg-white/50 backdrop-blur-sm">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Captr AI</div>
                                        <div className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            Online
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Messages - Animated */}
                                <div className="flex-1 p-4 space-y-4 bg-gray-50/50 overflow-hidden relative">
                                    {/* User Query */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="flex justify-end"
                                    >
                                        <div className="bg-gray-900 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs max-w-[80%] shadow-lg">
                                            Find all product managers in NY
                                        </div>
                                    </motion.div>

                                    {/* Typing Indicator & Response */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                        className="flex justify-start"
                                    >
                                        {/* AI Response Container - Animated */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, height: 0 }}
                                            whileInView={{ opacity: 1, y: 0, height: "auto" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 2 }} // Delayed appearance
                                            className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 text-xs max-w-[90%] shadow-sm border border-gray-100 space-y-3"
                                        >
                                            <p>I found 12 contacts matching "Product Manager" in New York.</p>

                                            {/* Contact Preview Card */}
                                            <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-3">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">SC</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-semibold text-gray-900 truncate">Sarah Connor</div>
                                                    <div className="text-gray-500 truncate">Tech Corp • NY</div>
                                                </div>
                                            </div>

                                            {/* Export Action */}
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                                <FileDown className="w-3.5 h-3.5" />
                                                <span>Export to CSV</span>
                                            </motion.button>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Input Area */}
                                <div className="p-3 border-t border-gray-100 bg-white">
                                    <div className="bg-gray-50 rounded-full px-4 py-2 flex items-center justify-between">
                                        <span className="text-xs text-gray-400">Ask anything...</span>
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer">
                                            <Send className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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
