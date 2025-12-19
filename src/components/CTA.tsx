import { Apple, Play } from 'lucide-react'

export function CTA() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-[3rem] relative overflow-hidden text-center text-white py-24 px-6 md:px-20 h-[600px] flex flex-col items-center justify-start">

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto mt-10">
                        <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-white tracking-tight mb-6">
                            Your first step to smarter<br />
                            contact management<br />
                            begins here.
                        </h2>
                        <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-white/90 mb-10 max-w-lg mx-auto">
                            Watch your contact network grow. Download the app and start taking action today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3 font-bold hover:bg-gray-100 transition-colors">
                                <img src="https://ik.imagekit.io/ji2lkjg53/App_Store_(iOS).svg.png" alt="App Store" className="w-8 h-8 object-contain" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-500">Download on the</div>
                                    <div className="text-lg leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3 font-bold hover:bg-gray-100 transition-colors">
                                <img src="https://ik.imagekit.io/ji2lkjg53/888857.png" alt="Google Play" className="w-8 h-8 object-contain" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold text-gray-500">Get it on</div>
                                    <div className="text-lg leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Left Mockup (Net Income) */}
                    <div className="absolute -bottom-10 -left-10 md:left-10 w-80 h-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 transform -rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <div className="text-blue-100 text-xs mb-1">Card Scanned</div>
                                <div className="text-2xl font-bold">5000</div>
                            </div>
                            <div>
                                <div className="text-blue-100 text-xs mb-1">Quic Deals</div>
                                <div className="text-xl font-bold text-white/80">4000</div>
                            </div>
                        </div>
                        {/* Chart Line */}
                        <div className="h-32 mb-4 relative">
                            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                <path d="M0,40 C20,40 20,10 50,20 C80,30 80,0 100,5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="100" cy="5" r="3" fill="white" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-50"></div>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full mb-2"></div>
                        <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                    </div>

                    {/* Right Mockup (Spend this week) */}
                    <div className="absolute -bottom-20 -right-10 md:right-10 w-80 h-96 bg-white rounded-3xl p-6 transform rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl text-gray-900">
                        <div className="mb-6">
                            <div className="flex justify-between text-sm font-bold text-gray-400 mb-2">
                                <span>Spend this week</span>
                            </div>
                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-1">
                                <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>$124 left to spend</span>
                                <span className="font-bold text-lg text-gray-900">$124</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">P</div>
                                <div>
                                    <div className="font-bold text-sm">Transfer to Dianne</div>
                                    <div className="text-xs text-gray-400">dianne@gmail.com</div>
                                </div>
                                <div className="ml-auto text-sm font-bold text-red-500"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">S</div>
                                <div>
                                    <div className="font-bold text-sm">Starbucks</div>
                                    <div className="text-xs text-gray-400">Coffee</div>
                                </div>
                                <div className="ml-auto text-sm font-bold text-red-500"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
