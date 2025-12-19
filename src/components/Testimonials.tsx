import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Emily Smith",
        role: "Lyon, France",
        text: "The app is intuitive and easy to navigate, and it's helped me reach my financial goals faster than I ever thought possible.",
        stars: 4.5,
        img: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Wade Warren",
        role: "Michigan, US",
        text: "I've finally taken control of my finances. It's so easy to use and has helped me save more money than ever before.",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=3" // Male
    },
    {
        name: "Michael Brown",
        role: "London, UK",
        text: "I was skeptical at first, but then I have completely transformed my relationship with money.",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=11" // Male
    },
    {
        name: "Jane Cooper",
        role: "Montreal, Canada",
        text: "The app is intuitive and easy to navigate, and it's helped me reach my financial goals faster than I ever thought possible.",
        stars: 5,
        img: "https://i.pravatar.cc/150?img=9" // Female
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Column 1: Header */}
                    <div className="lg:pr-12 lg:pl-24">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-blue-50/50 backdrop-blur-sm">
                            <Quote className="w-3 h-3 fill-current inline-block mr-1" /> Testimonials
                        </div>
                        <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(21,21,21)] tracking-tight mb-8">
                            Our Users<br />
                            <span className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(0,64,193)]">Talk About Us</span>
                        </h2>

                        <div className="flex items-center gap-4 mt-12 lg:mt-32">
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
                    </div>

                    {/* Column 2: Emily & Michael */}
                    <div className="space-y-8 flex flex-col justify-start pt-12">
                        <TestimonialCard {...testimonials[0]} />
                        <TestimonialCard {...testimonials[2]} />
                    </div>

                    {/* Column 3: Wade & Jane */}
                    <div className="space-y-8 flex flex-col justify-start">
                        <TestimonialCard {...testimonials[1]} />
                        <TestimonialCard {...testimonials[3]} />
                    </div>

                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ name, role, text, stars, img }: any) {
    return (
        <div className="bg-white rounded-[2rem] p-8 text-center transition-all hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgb(21,21,21)] mb-0.5">{name}</h3>
            <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(128,128,128)] mb-6">{role}</p>

            <div className="flex justify-center gap-1 mb-6 text-blue-600">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= Math.floor(stars) ? 'fill-current' : i === Math.ceil(stars) ? 'fill-current opacity-50' : 'text-gray-200'}`} />
                ))}
            </div>

            <p className="font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(21,21,21)]">
                {text}
            </p>
        </div>
    )
}
