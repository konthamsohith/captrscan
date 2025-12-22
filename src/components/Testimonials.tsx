import { useState, useEffect } from 'react'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Small Business Owner",
        text: "Managing receipts and invoices used to be a nightmare. Now I just snap a photo, and it's instantly organized and searchable. A total lifesaver for tax season!",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "David Chen",
        role: "Real Estate Agent",
        text: "The business card scanning is flawless. It captures every detail perfectly and syncs directly to my contacts. I've never been more organized at networking events.",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Elena Rodriguez",
        role: "Freelance Designer",
        text: "I love the 'Ask' feature! I can literally type 'show me the contract from fast month' and it retrieves it instantly. The OCR accuracy is impressive.",
        stars: 4.5,
        img: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Marcus Johnson",
        role: "Student",
        text: "I use this for all my lecture notes and handouts. The edge detection is great, and being able to search through my handwritten notes is a game changer.",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=9"
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [isPaused])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Column 1: Header (Spans 4 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 lg:pl-12"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-blue-50/50 backdrop-blur-sm">
                            <Quote className="w-3 h-3 fill-current inline-block mr-1" /> Testimonials
                        </div>
                        <h2 className="font-['Poppins'] font-normal text-4xl lg:text-[64px] lg:leading-[72px] text-[rgb(21,21,21)] tracking-tight mb-8">
                            Our Users<br />
                            <span className="font-['Poppins'] font-normal text-4xl lg:text-[64px] lg:leading-[72px] text-[rgb(0,64,193)]">Talk About Us</span>
                        </h2>

                        <div className="flex items-center gap-4 mt-12 mb-12">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-0.5">
                                    <span className="font-['Poppins'] font-medium text-[14px] leading-[20px] text-[rgb(21,21,21)]">4.8/5</span>
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                    </div>
                                </div>
                                <div className="font-['Poppins'] font-normal text-[12px] leading-[16px] text-[rgb(128,128,128)]">Based on 14K+ reviews</div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Column 2: Carousel (Spans 8 columns) */}
                    <div
                        className="lg:col-span-7 overflow-hidden relative min-h-[400px]"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * 100}%` }} // Simplified sliding for single item view on mobile, need adjustment for desktop visual
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Simple mapping logic: rendering all items in a long row and sliding the row */}
                            {/* NOTE: For a better "2 items visible" carousel, it's safer to map and assume specific widths. */}
                            {/* Let's use a simpler AnimatePresence crossfade or slide for 1 active item if mapping is tricky, BUT 'carousel' usually implies sliding list. */}
                            {/* Let's try to map the whole list and slide it. */}
                        </motion.div>

                        {/* Alternative: Simple single-card slider with Animate Presence for robustness */}
                        <div className="relative h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    {/* Display Current and Next item (Circular) */}
                                    <TestimonialCard {...testimonials[currentIndex]} />
                                    <TestimonialCard {...testimonials[(currentIndex + 1) % testimonials.length]} className="hidden md:block" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ name, role, text, stars, img, className = "" }: any) {
    return (
        <div className={`bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-xl shadow-gray-100/50 h-full flex flex-col justify-center ${className}`}>
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 bg-gray-100 border-4 border-white shadow-sm">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-['Poppins'] font-medium text-[20px] leading-[30px] text-[rgb(21,21,21)] mb-1">{name}</h3>
            <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(128,128,128)] mb-6 uppercase tracking-wide">{role}</p>

            <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.floor(stars) ? 'fill-current' : i === Math.ceil(stars) ? 'fill-current opacity-50' : 'text-gray-200'}`} />
                ))}
            </div>

            <p className="font-['Poppins'] font-normal text-[16px] leading-[28px] text-[rgb(21,21,21)] italic">
                "{text}"
            </p>
        </div>
    )
}
