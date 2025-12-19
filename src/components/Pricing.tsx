import { Check } from 'lucide-react'
// import { useState } from 'react'
import { cn } from '../lib/utils'

export function Pricing() {
    // const [isYearly, setIsYearly] = useState(false) // Removed

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20 relative z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-blue-50/50 backdrop-blur-sm">
                        Pricing
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(0,0,0)] tracking-tight mb-8">
                        Try For Free And<br />
                        <span className="text-[rgb(0,64,193)]">Start Controlling Your Finances</span>
                    </h2>

                    {/* Tabs Removed - displaying plans directly */}
                    {/* Header spacing adjustment */}
                    <div className="mb-16"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: Free */}
                    <PricingCard
                        tag="Free"
                        price="₹0"
                        period=""
                        plan="Free"
                        desc="Perfect for getting started"
                        features={['50 scans / month', 'Basic exports', 'Local device storage']}
                        buttonText="Choose Free"
                        variant="outline"
                        gradient="from-blue-400 to-blue-500"
                    />

                    {/* Card 2: Monthly */}
                    <PricingCard
                        tag="Monthly"
                        price="₹299"
                        period="/month"
                        plan="Monthly"
                        desc="Flexible monthly billing"
                        features={['Unlimited scans', 'AI assistant queries', 'Exports to Excel, CSV, vCard', 'Offline-first sync']}
                        buttonText="Choose Monthly"
                        variant="solid"
                        gradient="from-blue-600 to-blue-800"
                    />

                    {/* Card 3: Yearly */}
                    <PricingCard
                        tag="Best Value"
                        price="₹999"
                        period="/year"
                        plan="Yearly"
                        desc="Save big with annual billing"
                        features={['Unlimited scans', 'AI assistant + automations', 'Priority support', 'Advanced privacy controls']}
                        buttonText="Choose Yearly"
                        variant="outline"
                        gradient="from-blue-400 to-blue-600"
                    />
                </div>

            </div>
        </section>
    )
}

function PricingCard({ tag, price, period, plan, desc, features, variant, gradient, buttonText }: any) {
    return (
        <div className="rounded-[2.5rem] overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-blue-900/5">
            {/* Header (Blue) */}
            <div className={`h-48 ${gradient.includes('gradient') ? gradient : `bg-gradient-to-br ${gradient}`} p-8 text-white relative flex flex-col justify-center`}>
                <div className="flex items-center gap-2 mb-2 opacity-90">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <span className="font-['Instrument_Sans'] font-medium text-[20px] leading-[28px] text-white">{tag}</span>
                </div>
                <div className="flex items-end gap-1">
                    <span className="font-['Poppins'] font-medium text-[64px] leading-[72px] text-white">{price}</span>
                    <span className="text-blue-100 text-sm mb-1.5 font-medium">{period}</span>
                </div>
                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none"></div>
            </div>

            {/* Body (White/Gray) */}
            <div className="bg-gray-50/50 p-8 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)] mb-3">{plan}</h3>
                    <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(128,128,128)] mb-8">{desc}</p>
                    <hr className="border-gray-200 mb-8" />
                    <ul className="space-y-4 mb-8">
                        {features.map((f: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(21,21,21)]">
                                <Check className="w-4 h-4 text-gray-900 shrink-0" strokeWidth={3} />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                <button className={cn(
                    "w-full py-4 rounded-full font-['Poppins'] font-normal text-[18px] leading-normal transition-all",
                    buttonText === 'Choose Monthly' ? "bg-[rgb(0,0,238)] text-white hover:bg-blue-800 shadow-lg" : "bg-white text-[rgb(0,0,238)] border border-[rgb(0,0,238)] hover:bg-blue-50"
                )}>
                    {buttonText || 'Get Started Now'}
                </button>
            </div>
        </div>
    )
}
