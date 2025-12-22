import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Search, Send } from 'lucide-react'
import { User, Phone, Check } from 'lucide-react'

const steps = [
    { num: "1", title: "From scan to structured contact", desc: "Detect & Align, Gemini OCR, Actionable Contact." },
    { num: "2", title: "Keep every contact organized", desc: "Smart search, One-tap export, Quick actions" },
    { num: "3", title: "Ask anything, get instant answers", desc: "Natural language, Contact-aware, Smart export suggestions" }
]

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 bg-[#F3F6FF] relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-white shadow-sm">
                        <Settings className="w-3 h-3" /> How It Works
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-4xl lg:text-[64px] lg:leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        How Captr<br />
                        <span className="text-[rgb(0,64,193)]">Can Help You</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center justify-center max-w-6xl mx-auto">

                    {/* Left: Phone Mockup (Dynamic Screen) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[280px] h-[570px] bg-black rounded-[3rem] shadow-[0_0_0_11px_#171717,0_0_0_12px_#000000,0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden z-20">
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[24px] w-[90px] bg-black rounded-b-[16px] z-50"></div>

                            {/* Side Buttons */}
                            <div className="h-[28px] w-[3px] bg-gray-900 absolute -start-[14px] top-[90px] rounded-s-lg"></div>
                            <div className="h-[40px] w-[3px] bg-gray-900 absolute -start-[14px] top-[135px] rounded-s-lg"></div>
                            <div className="h-[56px] w-[3px] bg-gray-900 absolute -end-[14px] top-[160px] rounded-e-lg"></div>

                            {/* Screen Content */}
                            <div className={`w-full h-full rounded-[3rem] overflow-hidden relative flex flex-col transition-colors duration-500 ${activeStep === 0 ? 'bg-gray-900' : activeStep === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                                {/* Status Bar Mock */}
                                <div className={`absolute top-4 left-7 text-[12px] font-bold z-40 transition-colors duration-300 ${activeStep === 0 ? 'text-white' : 'text-black'}`}>9:41</div>
                                <div className="absolute top-4 right-7 flex gap-1 z-40">
                                    <div className={`w-5 h-3 rounded-[2px] transition-colors duration-300 ${activeStep === 0 ? 'bg-white' : 'bg-black'}`}></div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {activeStep === 0 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-1 flex flex-col p-6 items-center justify-center bg-gray-900 relative"
                                        >
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557200130-b7220628fa65?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>

                                            {/* Scanning Overlay */}
                                            <div className="relative z-10 w-full aspect-[3/2] border-2 border-blue-500 rounded-lg bg-blue-500/10 flex items-center justify-center backdrop-blur-[1px]">
                                                <motion.div
                                                    className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)]"
                                                    animate={{ top: ['0%', '100%', '0%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                />
                                                <div className="bg-white/90 p-3 rounded-xl shadow-lg flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                        <User className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold text-gray-900">Eva Rhodes</div>
                                                        <div className="text-[10px] text-gray-500">Product Manager</div>
                                                    </div>
                                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 ml-2">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 text-white text-center">
                                                <h4 className="font-bold text-lg mb-1">Scanning...</h4>
                                                <p className="text-gray-400 text-sm">Align business card</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeStep === 1 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-1 flex flex-col bg-gray-50"
                                        >
                                            <div className="bg-gray-50 pt-14 px-6 pb-4 shadow-sm z-10 transition-colors duration-500">
                                                <h3 className="font-bold text-xl mb-4 text-gray-900">Contacts</h3>
                                                <div className="bg-white rounded-xl p-3 flex items-center gap-2 text-gray-500 border border-gray-100 shadow-sm">
                                                    <Search className="w-4 h-4" />
                                                    <span className="text-sm">Search contacts...</span>
                                                </div>
                                            </div>
                                            <div className="p-4 space-y-3 overflow-hidden">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${i === 1 ? 'bg-blue-500' : 'bg-purple-500'}`}>
                                                                {i === 1 ? 'JD' : 'AS'}
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-gray-900">Eva Rhodes</div>
                                                                <div className="text-[10px] text-gray-500">Tech Corp Inc.</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                                                <Phone className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <motion.div
                                                initial={{ y: 50 }}
                                                animate={{ y: 0 }}
                                                className="mt-auto m-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                                            >
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="font-bold text-gray-900 text-sm">Action</span>
                                                    <span className="text-xs text-gray-400">Just now</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button className="flex-1 bg-blue-600 text-white text-xs font-bold py-2 rounded-lg">Call Eva</button>
                                                    <button className="flex-1 bg-gray-100 text-gray-700 text-xs font-bold py-2 rounded-lg">Email</button>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {activeStep === 2 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-1 flex flex-col bg-white"
                                        >
                                            <div className="pt-14 px-6 pb-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                                        <span className="font-bold text-xs">AI</span>
                                                    </div>
                                                    <span className="font-bold text-gray-900 text-sm">Captr Assistant</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 p-4 space-y-4">
                                                <div className="flex justify-end">
                                                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs max-w-[80%]">
                                                        Can you find product managers in NY?
                                                    </div>
                                                </div>
                                                <div className="flex justify-start">
                                                    <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-tl-sm text-xs max-w-[85%] space-y-2">
                                                        <p>I found 3 contacts matching "Product Manager" in New York:</p>
                                                        <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2">
                                                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-bold">JD</div>
                                                            <span className="font-bold">Eva Rhodes</span>
                                                        </div>
                                                        <div className="flex gap-2 mt-1">
                                                            <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold">Draft Email</span>
                                                            <span className="px-2 py-1 bg-green-50 text-green-600 rounded-lg text-[10px] font-bold">Export List</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 border-t border-gray-100">
                                                <div className="bg-gray-50 rounded-full p-2 pl-4 flex items-center justify-between">
                                                    <span className="text-gray-400 text-xs">Ask anything...</span>
                                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                                                        <Send className="w-3 h-3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-30"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Timeline */}
                    <div className="flex-1 pt-8">
                        <div className="space-y-16 relative">
                            {/* Timeline Line - Animated */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-blue-100"
                            />

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.4, duration: 0.5, ease: "easeOut" }}
                                    className="flex gap-8 items-start relative z-10 cursor-pointer"
                                    onClick={() => setActiveStep(i)}
                                >
                                    {/* Circle - Animated */}
                                    <motion.div
                                        animate={{
                                            scale: activeStep === i ? 1.2 : 1,
                                            backgroundColor: activeStep === i ? '#2563EB' : '#FFFFFF',
                                            color: activeStep === i ? '#FFFFFF' : '#6B7280',
                                            borderColor: activeStep === i ? '#2563EB' : '#E5E7EB'
                                        }}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ring-4 ring-white transition-colors duration-300 border`}
                                    >
                                        {step.num}
                                    </motion.div>
                                    <div className={`pt-0 transition-opacity duration-300 ${activeStep === i ? 'opacity-100' : 'opacity-40'}`}>
                                        <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-4">{step.title}</h3>
                                        <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(128,128,128)] max-w-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
