import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function About() {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
                                alt="Team Meeting"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-bold text-4xl text-blue-600 mb-2">10M+</p>
                                <p className="text-gray-600 font-medium">Active users trusting our platform worldwide</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                            Our Missions
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            We help you achieve financial <span className="text-blue-600">freedom</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Our mission is to democratize finance and make professional-grade tools accessible to everyone. We believe that financial freedom should be a right, not a privilege.
                        </p>

                        <div className="space-y-4">
                            {["Smart Investing Algorithms", "Real-time Market Analysis", "Secure Data Encryption", "24/7 Expert Support"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
