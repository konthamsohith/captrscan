import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Check, Star, Fingerprint } from 'lucide-react'

// Define the content for each card
const cards = [
    {
        tag: "SCAN",
        title: "Save time with fast, accurate scanning.",
        desc: "Automate scanning, extraction, and follow-ups—freeing your time for what matters most..",
        points: ['Stay on top of every scan.', 'Automate scanning for less effort.'],
        visual: "activity",
        color: "bg-blue-50"
    },
    {
        tag: "SAVE",
        title: "Take control of how you save and organize contacts.",
        desc: "Gain clear insights into your saved contacts, helping you stay organized and act faster.",
        points: ['Build a smarter contact library.', 'Make informed decisions with saved contacts.'],
        visual: "growth",
        color: "bg-indigo-50"
    },
    {
        tag: "ACT",
        title: "Experience the confidence of taking action instantly.",
        desc: "Protect your contact data while taking action with confidence.",
        points: ['Act securely on every contact.', 'Confidence in every action.'],
        visual: "security",
        color: "bg-purple-50"
    }
]

export function BenefitDeepDive() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section className="py-24 bg-white" ref={container}>
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center ">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-white shadow-sm">
                        <Star className="w-3 h-3 fill-current" /> Benefit
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        Experience The<br />
                        <span className="text-[rgb(0,64,193)]">Future of Contact Capture</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-8 pb-24">
                    {cards.map((card, i) => {
                        const targetScale = 1 - ((cards.length - i) * 0.05);
                        return <StickyCard key={i} index={i} total={cards.length} {...card} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
                    })}
                </div>
            </div>
        </section>
    )
}

interface CardProps {
    index: number;
    // total removed
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
            className="sticky top-32 w-full h-screen flex items-center justify-center sticky-card-container"
            style={{
                zIndex: index + 1,
                marginBottom: -100 // Adjust margin to create overlap or spacing
            }}
        >
            <motion.div
                style={{ scale, top: `calc(10vh + ${index * 25}px)` }} // Adjust top for stacking visual
                className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl border border-gray-100 w-full max-w-6xl relative" // Removed flex items-center and min-h-[600px]
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    {/* Visual */}
                    <VisualComponent type={visual} />

                    {/* Content */}
                    <div>
                        <div className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(0,64,193)] mb-4">• {tag}</div>
                        <h3 className="font-['Poppins'] font-medium text-[36px] leading-[48px] text-[rgb(21,21,21)] mb-6 ">{title}</h3>
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

function VisualComponent({ type }: { type: string }) {
    if (type === 'activity') return (
        <div className="bg-blue-300/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="bg-white rounded-[2rem] p-6 w-full max-w-sm shadow-xl relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-lg">Activity</h4>
                    <span className="text-xs text-gray-400 border px-2 py-1 rounded-md">Month ▾</span>
                </div>
                <div className="relative h-40 w-full flex items-end justify-center mb-6 overflow-hidden">
                    <div className="absolute w-52 h-52 border-[24px] border-blue-100 rounded-full top-0 box-border"></div>
                    <div className="absolute w-52 h-52 border-[24px] border-transparent border-t-blue-500 border-l-indigo-500 rounded-full top-0 rotate-[-45deg] box-border"></div>
                    <div className="absolute bottom-6 flex flex-col items-center"><span className="text-3xl font-bold text-gray-900">75%</span></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div><div className="flex items-center gap-2 text-xs text-gray-500 mb-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>Daily payment</div><div className="font-bold">55%</div></div>
                    <div><div className="flex items-center gap-2 text-xs text-gray-500 mb-1"><span className="w-2 h-2 rounded-full bg-blue-400"></span>Hobby</div><div className="font-bold">20%</div></div>
                </div>
                <button className="w-full mt-6 py-3 border rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50">View all activity →</button>
            </div>
        </div>
    )

    if (type === 'growth') return (
        <div className="bg-blue-300/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-xl relative z-10">
                <h4 className="font-bold text-lg mb-6">Financial Growth</h4>
                <div className="h-48 flex items-end justify-between gap-2 relative">
                    {[40, 70, 50, 65, 45, 30, 80].map((h, i) => (
                        <div key={i} className="w-full bg-indigo-500 rounded-t-lg" style={{ height: `${h}%` }}></div>
                    ))}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <path d="M0 150 L 50 120 L 100 80 L 150 100 L 200 60 L 250 130 L 300 40" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="200" cy="60" r="4" fill="white" stroke="#22d3ee" strokeWidth="2" />
                        <rect x="180" y="20" width="40" height="24" rx="4" fill="#374151" />
                        <text x="200" y="37" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">65%</text>
                    </svg>
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium"><span>C1</span><span>C2</span><span>C3</span><span>C4</span><span>C5</span><span>C6</span><span>C7</span></div>
            </div>
        </div>
    )

    if (type === 'security') return (
        <div className="bg-blue-300/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="relative w-64 h-64 bg-blue-500 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-full h-full bg-blue-400 rounded-[3rem] scale-90 opacity-50"></div>
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20 border-4 border-blue-600/30">
                    <Fingerprint className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
                </div>
                <div className="absolute top-0 w-full h-1/2 bg-blue-400/50 rounded-b-[4rem] backdrop-blur-sm z-10"></div>
            </div>
        </div>
    )
    return null
}
