import { motion } from 'framer-motion'
// import { ArrowUpRight, ArrowDownLeft, RefreshCw, Smartphone, CreditCard, BarChart2, User, Home } from 'lucide-react'

export function PhoneMockups() {
    return (
        <div className="relative mx-auto w-[320px] h-[640px] border-gray-800 bg-gray-900 border-[12px] rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-gray-900/50">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[26px] w-[100px] bg-black rounded-b-[16px] z-50"></div>

            {/* Side Buttons */}
            <div className="h-[32px] w-[3px] bg-gray-600 absolute -start-[15px] top-[100px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-600 absolute -start-[15px] top-[150px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-600 absolute -end-[15px] top-[180px] rounded-e-lg"></div>

            {/* Screen Content: Scanning UI */}
            <div className="w-full h-full bg-black relative overflow-hidden rounded-[2.3rem]">
                {/* Camera View Placeholder (Simulated) */}
                <div className="absolute inset-0 bg-gray-900">
                    {/* Background blurred elements to simulate camera view */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                {/* Top Overlay */}
                <div className="absolute top-0 left-0 right-0 p-8 pt-12 flex justify-between items-center z-20">
                    <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                        <XmarkIcon className="w-6 h-6" />
                    </button>
                    <div className="bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-medium">
                        Auto-capture on
                    </div>
                    <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                        <FlashIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Scanning Area */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative w-64 h-40 border-2 border-white/50 rounded-2xl overflow-hidden">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white -mt-[2px] -ml-[2px] rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white -mt-[2px] -mr-[2px] rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white -mb-[2px] -ml-[2px] rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white -mb-[2px] -mr-[2px] rounded-br-lg"></div>

                        {/* ID Card Simulation */}
                        <div className="absolute inset-2 bg-white rounded-xl shadow-lg p-3 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                                <div className="w-16 h-2 bg-gray-100 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="w-24 h-3 bg-gray-800 rounded"></div>
                                <div className="w-32 h-2 bg-gray-200 rounded"></div>
                                <div className="w-20 h-2 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        {/* Scanning Laser */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20"
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Bottom Overlay & Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 z-20 flex flex-col items-center gap-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white text-center">
                        <p className="font-bold text-lg mb-1">Scan ID Card</p>
                        <p className="text-white/60 text-xs">Align card within the frame</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600"></div>
                        <button className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full"></div>
                        </button>
                        <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-white/50 text-[10px] font-bold">
                            Edit
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
