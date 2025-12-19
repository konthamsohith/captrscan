import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Blog() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-bold">Latest from our blog</h2>
                    <a href="#" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-4 transition-all">View all <ArrowRight className="w-4 h-4" /></a>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-[2] bg-white rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <div className="h-64 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=800" alt="Money" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-8">
                            <div className="text-sm font-bold text-blue-600 mb-2">FINANCE TIPS</div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">How to save your first $10k in 6 months</h3>
                            <p className="text-gray-600">A step-by-step guide to aggressive saving and smart budgeting that anyone can follow.</p>
                        </div>
                    </motion.div>

                    {/* Side List */}
                    <div className="flex-1 space-y-8">
                        {[
                            { title: "The future of crypto", cat: "INVESTING" },
                            { title: "Understanding interest rates", cat: "EDUCATION" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                            >
                                <div className="text-xs font-bold text-gray-400 mb-2">{item.cat}</div>
                                <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
