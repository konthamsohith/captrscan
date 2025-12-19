import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'
// import { EyeOff, Lock, User, Github } from 'lucide-react'

const steps = [
    { num: "1", title: "From scan to structured contact", desc: "Detect & Align ,Gemini OCR ,Actionable Contact.", active: true },
    { num: "2", title: "Keep every contact organized", desc: "Smart search ,One-tap export ,Quick actions", active: false },
    { num: "3", title: "Ask anything, get instant answers", desc: "Natural language ,Contact-aware ,Smart export suggestions", active: false }
]

export function HowItWorks() {
    return (
        <section className="py-32 bg-[#F3F6FF] relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-white shadow-sm">
                        <Settings className="w-3 h-3" /> How It Works
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        How Captra<br />
                        <span className="text-[rgb(0,64,193)]">Can Help You</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-center justify-center max-w-6xl mx-auto">

                    {/* Left: Phone Mockup (Login Screen) */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl border-[8px] border-black ring-1 ring-gray-900/10">
                            {/* Screen Content */}
                            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col p-6 pt-14">
                                {/* Status Bar Mock */}
                                <div className="absolute top-0 left-0 right-0 h-10 px-6 flex justify-between items-center text-xs font-bold text-black z-20">
                                    <span>11:41</span>
                                    <div className="w-20 h-6 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0"></div>
                                    <span>📶 🔋</span>
                                </div>

                                {/* Back Button */}
                                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center mb-6 text-gray-800">
                                    ←
                                </div>

                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">Hi, Welcome Back!</h3>
                                    <p className="text-gray-400 text-sm">Sign in to your account</p>
                                </div>

                                {/* Inputs */}
                                <div className="space-y-4 mb-8">
                                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                                        <span className="text-blue-500">📞</span>
                                        <span className="text-sm font-medium text-gray-700">0812 345 6789</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3 justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-blue-500">🔒</span>
                                            <span className="text-sm font-bold text-gray-900 mx-1">••••••••</span>
                                        </div>
                                        <EyeOff className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-blue-600 text-xs font-bold cursor-pointer">Forgot Password?</span>
                                    </div>
                                </div>

                                {/* Login Button */}
                                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 mb-6">
                                    Login
                                </button>

                                <div className="text-center text-xs text-gray-400 mb-6">Don't have an account? <span className="text-blue-600 font-bold">Sign Up</span></div>

                                <div className="text-center text-xs text-gray-300 mb-6">Or login with</div>

                                {/* Social Login */}
                                <button className="w-full border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-gray-700">
                                    <span className="text-lg font-serif">G</span> Login with Google
                                </button>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Timeline */}
                    <div className="flex-1 lg:pl-10">
                        <div className="space-y-12 relative">
                            {/* Timeline Line */}
                            <div className="absolute left-[20px] top-6 bottom-16 w-0.5 bg-blue-100"></div>

                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-8 relative z-10"
                                >
                                    {/* Circle */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ring-4 ring-white ${step.active ? 'bg-blue-600 text-white shadow-blue-500/30 shadow-lg' : 'bg-white text-gray-300 border border-gray-100'}`}>
                                        {step.num}
                                    </div>
                                    <div className="pt-0">
                                        <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-4">{step.title}</h3>
                                        <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(21,21,21)] max-w-sm">{step.desc}</p>
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
