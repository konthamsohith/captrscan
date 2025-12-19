import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

const faqs = [
    { q: "Does Captr work offline?", a: "Yes. Captr is local-first by default. You can scan anywhere, and we sync when you choose, keeping your data private." },
    { q: "Which OCR model do you use?", a: "We use Google Gemini 2.5 Flash for fast, accurate extraction across front and back of cards with edge detection." },
    { q: "Can I export my contacts?", a: "Export to Excel, CSV, and vCard in one tap. CRM integrations are supported via bulk export or API." },
    { q: "Is my data secure and GDPR compliant?", a: "Yes. We offer on-device processing, encryption at rest, and GDPR-aligned controls for access and deletion." },
    { q: "Do you support team accounts?", a: "Teams can share libraries, set permissions, and use the AI assistant to surface org-aware results across workspaces." }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(0,64,193)] mb-6 bg-white shadow-sm">
                        FAQ
                    </div>
                    <h2 className="font-['Poppins'] font-normal text-[64px] leading-[72px] text-[rgb(21,21,21)] tracking-tight">
                        Frequently Asked <span className="text-[rgb(0,64,193)]">Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-blue-100 rounded-2xl overflow-hidden bg-white hover:border-blue-300 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={cn(
                                    "font-['Poppins'] font-medium text-[18px] leading-[28px] transition-colors duration-300",
                                    openIndex === i ? "text-[rgb(0,64,193)]" : "text-[rgb(21,21,21)] group-hover:text-[rgb(0,64,193)]"
                                )}>{faq.q}</span>
                                <span className={cn("transition-transform duration-300 text-gray-400", openIndex === i ? "rotate-180 text-[rgb(0,64,193)]" : "")}>
                                    <ChevronDown className="w-5 h-5" />
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 font-['Poppins'] font-normal text-[16px] leading-[24px] text-[rgb(102,102,102)]">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
