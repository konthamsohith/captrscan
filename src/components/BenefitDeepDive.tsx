import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Check, Star } from 'lucide-react'

// Define the content for each card
const cards = [
    {
        tag: "SCAN",
        title: "Save time with fast, accurate scanning.",
        desc: "Automate scanning, extraction, and follow-ups—freeing your time for what matters most..",
        points: ['Stay on top of every scan.', 'Automate scanning for less effort.'],
        visual: "scan",
        color: "bg-gray-50"
    },
    {
        tag: "SAVE",
        title: "Take control of how you save and organize contacts.",
        desc: "Gain clear insights into your saved contacts, helping you stay organized and act faster.",
        points: ['Build a smarter contact library.', 'Make informed decisions with saved contacts.'],
        visual: "save",
        color: "bg-gray-50"
    },
    {
        tag: "ACT",
        title: "Experience the confidence of taking action instantly.",
        desc: "Protect your contact data while taking action with confidence.",
        points: ['Act securely on every contact.', 'Confidence in every action.'],
        visual: "act",
        color: "bg-gray-50"
    }
]

export function BenefitDeepDive() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section id="benefit" className="py-24 bg-white" ref={container}>
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center ">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-white shadow-sm">
                        <Star className="w-3 h-3 fill-current" /> Benefit
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-4xl lg:text-[64px] lg:leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        Experience The<br />
                        <span className="text-[rgb(0,64,193)]">Future of Contact Capture</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-8 pb-24">
                    {cards.map((card, i) => {
                        const targetScale = 1 - ((cards.length - i) * 0.05);
                        return <StickyCard key={i} index={i} {...card} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
                    })}
                </div>
            </div>
        </section>
    )
}

interface CardProps {
    index: number;
    tag: string;
    title: string;
    desc: string;
    points: string[];
    visual: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

function StickyCard({ index, tag, title, desc, points, visual, progress, range, targetScale }: CardProps) {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            className="sticky top-24 lg:top-32 w-full min-h-[600px] lg:h-screen flex items-center justify-center sticky-card-container mb-12 lg:mb-0"
            style={{
                zIndex: index + 1,
            }}
        >
            <motion.div
                style={{ scale, top: `calc(10vh + ${index * 25}px)` }} // Adjust top for stacking visual
                className="bg-white rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-12 shadow-2xl border border-gray-100 w-full max-w-6xl relative"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
                    {/* Visual */}
                    <VisualComponent type={visual} />

                    {/* Content */}
                    <div>
                        <div className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(0,64,193)] mb-4">• {tag}</div>
                        <h3 className="font-['Poppins'] font-medium text-3xl lg:text-[36px] lg:leading-[48px] text-[rgb(21,21,21)] mb-6 ">{title}</h3>
                        <p className="font-['Poppins'] font-normal text-[18px] leading-[28px] text-[rgb(128,128,128)] mb-8">{desc}</p>
                        <ul className="space-y-4">
                            {points.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-['Poppins'] font-normal text-[18px] leading-[28px] text-[rgb(21,21,21)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

import { User, Phone, Mail, Zap, Folder } from 'lucide-react'

function VisualComponent({ type }: { type: string }) {
    // 1. SCAN Visual: Dynamic scanning process
    if (type === 'scan') return (
        <div className="bg-blue-600/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center border border-blue-100/50">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="relative w-64 h-80 bg-white rounded-2xl shadow-xl p-4 flex flex-col border border-gray-100 z-10">
                {/* Simulated Document */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                    <div className="space-y-1">
                        <div className="w-24 h-2 bg-gray-200 rounded"></div>
                        <div className="w-16 h-2 bg-gray-100 rounded"></div>
                    </div>
                </div>
                <div className="space-y-2 mb-4">
                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                </div>

                {/* AI Extracted Data Overlay */}
                <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg border border-blue-100">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium text-blue-900">Name Identified</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <Mail className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-medium text-slate-900">Email Extracted</span>
                    </div>
                </div>

                {/* Scanning Beam */}
                <motion.div
                    className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    )

    // 2. SAVE Visual: Organized Folders / Library
    if (type === 'save') return (
        <div className="bg-indigo-300/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="relative w-full max-w-sm">
                <div className="absolute top-0 right-0 -mr-4 -mt-4">
                    <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg">Cloud Sync</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Folder 1 */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                            <Folder className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Work</div>
                            <div className="text-xs text-gray-500">124 Contacts</div>
                        </div>
                    </div>
                    {/* Folder 2 */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                            <Folder className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Events</div>
                            <div className="text-xs text-gray-500">45 Contacts</div>
                        </div>
                    </div>
                    {/* Folder 3 */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                            <Folder className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Personal</div>
                            <div className="text-xs text-gray-500">82 Contacts</div>
                        </div>
                    </div>
                    {/* Add New */}
                    <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-indigo-50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center font-bold text-lg">+</div>
                        <div className="text-xs font-semibold text-indigo-400">New List</div>
                    </div>
                </div>
            </div>
        </div>
    )

    // 3. ACT Visual: Action Buttons / Connecting
    if (type === 'act') return (
        <div className="bg-purple-300/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="relative w-72 bg-white rounded-3xl shadow-2xl p-6 z-10">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full p-1 mb-3">
                        <div className="w-full h-full bg-white rounded-full p-1">
                            <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden">
                                {/* Avatar Placeholder */}
                                <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Sarah Connor</h3>
                    <p className="text-sm text-gray-500">Product Manager</p>
                </div>

                {/* Instant Actions */}
                <div className="grid grid-cols-3 gap-3">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shadow-sm border border-green-100">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-600">Call</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm border border-blue-100">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-600">Email</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm border border-purple-100">
                            <Zap className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-600">Connect</span>
                    </motion.button>
                </div>
            </div>
        </div>
    )

    return null
}
