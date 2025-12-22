import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
                isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent"
            )}>
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg text-white flex items-center justify-center font-bold text-lg">
                            C
                        </div>
                        <span className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)]">captr</span>
                    </a>
                    {/* Centered Links (Desktop) */}
                    <div className="hidden lg:flex items-center bg-gray-100/50 rounded-full px-2 py-1.5 backdrop-blur-sm border border-gray-100">
                        {[
                            { name: "Home", href: "#home" },
                            { name: "Features", href: "#features" },
                            { name: "Benefit", href: "#benefit" },
                            { name: "About", href: "#about" },
                            { name: "Testimonials", href: "#testimonials" },
                            { name: "Pricing", href: "#pricing" },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-['Poppins'] font-normal text-[16px] leading-normal text-[rgba(0, 0, 0, 1)] px-4 py-2 rounded-full hover:bg-white/80 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Button */}
                    <div className="hidden lg:block">
                        {/* CTA Button */}
                        <a href="#download" className="bg-white font-['Poppins'] font-normal text-[16px] leading-normal text-[rgb(0,0,238)] px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-lg shadow-blue-100/50 inline-block">
                            Start Free
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 bg-white"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold">captr</span>
                                <button onClick={() => setIsMobileMenuOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 text-lg font-medium">
                                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600">Home</a>
                                <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                                <a href="#benefit" onClick={() => setIsMobileMenuOpen(false)}>Benefit</a>
                                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
