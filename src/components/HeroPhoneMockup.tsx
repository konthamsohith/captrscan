import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Phone, Mail, User, Check, ChevronLeft, MoreVertical } from 'lucide-react'

export function HeroPhoneMockup() {
    const [screen, setScreen] = useState<'home' | 'camera' | 'results'>('home')

    useEffect(() => {
        // Animation Sequence
        const launchApp = setTimeout(() => setScreen('camera'), 2000) // Launch app after 2s

        let scanComplete: NodeJS.Timeout
        let reset: NodeJS.Timeout

        if (screen === 'camera') {
            scanComplete = setTimeout(() => setScreen('results'), 3500) // Scan for 3.5s then show results
        }

        if (screen === 'results') {
            reset = setTimeout(() => setScreen('home'), 5000) // Show results for 5s then restart
        }

        return () => {
            clearTimeout(launchApp)
            clearTimeout(scanComplete)
            clearTimeout(reset)
        }
    }, [screen])

    return (
        <div className="relative mx-auto w-[280px] h-[570px] bg-black rounded-[3rem] shadow-[0_0_0_11px_#171717,0_0_0_12px_#000000,0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-gray-900/50">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[24px] w-[90px] bg-black rounded-b-[16px] z-50"></div>

            {/* Side Buttons */}
            <div className="h-[28px] w-[3px] bg-gray-900 absolute -start-[14px] top-[90px] rounded-s-lg"></div>
            <div className="h-[40px] w-[3px] bg-gray-900 absolute -start-[14px] top-[135px] rounded-s-lg"></div>
            <div className="h-[56px] w-[3px] bg-gray-900 absolute -end-[14px] top-[160px] rounded-e-lg"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-black relative overflow-hidden rounded-[3rem]">
                <AnimatePresence mode="wait">
                    {screen === 'camera' && <CameraScreen key="camera" />}
                    {screen === 'results' && <ResultsScreen key="results" />}
                </AnimatePresence>

                {/* Status Bar Time (Static) */}
                <div className="absolute top-4 left-7 text-white text-[12px] font-bold z-50">9:41</div>
                <div className="absolute top-4 right-7 flex gap-1 z-50">
                    <div className="w-5 h-3 bg-white rounded-[2px]"></div>
                </div>
            </div>
        </div>
    )
}



function CameraScreen() {
    return (
        <motion.div
            className="w-full h-full bg-black relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Camera Feed Simulation */}
            <div className="absolute inset-0 bg-gray-900 overflow-hidden">
                {/* Simulated Camera Noise/Grain */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Dynamic Background Blobs */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-40 right-10 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen"
                />
            </div>

            {/* UI Overlay */}
            <div className="absolute top-0 left-0 right-0 p-8 pt-12 flex justify-between items-center z-20">
                <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-colors"><XmarkIcon className="w-6 h-6" /></button>
                <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-mono font-medium border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    SCANNING
                </div>
                <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-colors"><FlashIcon className="w-6 h-6" /></button>
            </div>

            {/* Scanning Area */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-72 h-44 rounded-2xl overflow-hidden">

                    {/* Corner Markers - Active State */}
                    <div className="absolute inset-0 z-20">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-400 rounded-tl-xl shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-400 rounded-tr-xl shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-blue-400 rounded-bl-xl shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-blue-400 rounded-br-xl shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                    </div>

                    {/* Detailed Business Card */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-[2px] bg-white rounded-xl p-5 shadow-2xl flex flex-col justify-between transform rotate-0 z-10 overflow-hidden"
                    >
                        {/* Card Content */}
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-[10px] tracking-widest text-blue-600 font-bold uppercase">Tech Corp</div>
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="text-[18px] text-gray-900 font-bold leading-tight tracking-tight">Sarah Connor</div>
                                <div className="text-[10px] text-gray-500 font-medium mt-0.5">Product Manager</div>
                            </div>
                        </div>
                        <div className="relative z-10 space-y-1.5 border-t border-gray-100 pt-3">
                            <div className="flex items-center gap-2 text-[9px] text-gray-600 font-medium">
                                <Mail className="w-2.5 h-2.5 text-blue-500" /> sarah@tech.com
                            </div>
                            <div className="flex items-center gap-2 text-[9px] text-gray-600 font-medium">
                                <Phone className="w-2.5 h-2.5 text-blue-500" /> +91 63041 96183
                            </div>
                        </div>

                        {/* Subtle Card Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-10 -mt-10 z-0"></div>
                    </motion.div>

                    {/* Scanning Laser Effect */}
                    <div className="absolute inset-0 z-30 overflow-hidden rounded-xl pointer-events-none">
                        <motion.div
                            className="absolute left-0 right-0 h-32 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-400/0 border-b-[3px] border-blue-400 shadow-[0_0_30px_rgba(96,165,250,0.6)]"
                            animate={{ top: ['-20%', '120%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                        >
                            <div className="w-full h-full bg-[size:4px_4px] bg-[radial-gradient(rgba(59,130,246,0.3)_1px,transparent_0)]"></div>
                        </motion.div>
                    </div>

                    {/* Detected Text Overlays (OCR Boxes) */}
                    <div className="absolute inset-0 z-20 pointer-events-none p-5 flex flex-col justify-between">
                        <div className="mt-8 space-y-2">
                            {/* Name Box */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.1 }}
                                className="w-[120px] h-[24px] border border-blue-500/50 bg-blue-500/10 rounded ml-[-4px] relative"
                            >
                                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-500"></div>
                                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-blue-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-blue-500"></div>
                                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-500"></div>
                            </motion.div>
                            {/* Role Box */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.3 }}
                                className="w-[80px] h-[14px] border border-blue-500/50 bg-blue-500/10 rounded ml-[-4px]"
                            />
                        </div>

                        <div className="space-y-2 pb-1">
                            {/* Email Box */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.5 }}
                                className="w-[100px] h-[12px] border border-blue-500/50 bg-blue-500/10 rounded ml-[-4px]"
                            />
                            {/* Phone Box */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1], delay: 0.7 }}
                                className="w-[90px] h-[12px] border border-blue-500/50 bg-blue-500/10 rounded ml-[-4px]"
                            />
                        </div>
                    </div>

                    {/* Processing Overlay */}
                    <motion.div
                        className="absolute top-4 right-4 z-40 bg-black/60 backdrop-blur px-2 py-1 rounded text-[8px] font-mono text-green-400 border border-green-500/30 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        OCR PROCESSING
                    </motion.div>

                </div>
            </div>

            <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
                <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center cursor-pointer hover:border-white/40 transition-colors">
                    <div className="w-14 h-14 bg-white rounded-full scale-90 active:scale-75 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
                </div>
            </div>
        </motion.div>
    )
}

function ResultsScreen() {
    return (
        <motion.div
            className="w-full h-full bg-white relative flex flex-col"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
            {/* Header */}
            <div className="pt-12 px-6 pb-4 flex items-center justify-between border-b border-gray-100">
                <ChevronLeft className="w-6 h-6 text-gray-900" />
                <span className="font-semibold text-gray-900">Contact Added</span>
                <MoreVertical className="w-6 h-6 text-gray-900" />
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center mt-8 mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <User className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sarah Connor</h3>
                <p className="text-gray-500">Product Manager</p>
                <p className="text-blue-600 text-sm font-medium mt-1">Tech Corp</p>
            </div>

            {/* Details List */}
            <div className="px-6 space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-gray-500">Mobile</div>
                        <div className="text-sm font-medium text-gray-900">+91 63041 96183</div>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="text-sm font-medium text-gray-900">sarah@tech.com</div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto p-8 pb-12">
                <button className="w-full bg-blue-600 text-white rounded-xl py-4 font-medium shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Save Contact
                </button>
            </div>
        </motion.div>
    )
}

function FlashIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    )
}

function XmarkIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    )
}
