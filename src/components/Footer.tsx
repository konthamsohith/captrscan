import { Twitter, Instagram, Linkedin, Facebook, Send } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-black rounded-lg text-white flex items-center justify-center font-bold text-lg">
                                C
                            </div>
                            <span className="font-['Poppins'] font-medium text-[24px] leading-[30px] text-[rgb(21,21,21)]">captr</span>
                        </a>
                        <p className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgb(21,21,21)] mb-8 max-w-sm">
                            Scan. Save. Act. AI-powered business card scanner that turns contacts into action-ready connections.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgba(0, 0, 0, 1)] mb-6">Product</h4>
                        <ul className="space-y-4 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(102, 102, 102)]">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Security</a></li>
                            <li><a href="#" className="hover:text-blue-600">Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgb(21,21,21)] mb-6">Company</h4>
                        <ul className="space-y-4 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(102, 102, 102)]">
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] font-medium text-[18px] leading-[28px] text-[rgb(21,21,21)] mb-6">Newsletter</h4>
                        <p className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(102, 102, 102)] mb-4">Subscribe for the latest updates.</p>
                        <div className="relative">
                            <input type="email" placeholder="Email address" className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-4 focus:outline-none focus:border-blue-600 font-['Poppins'] font-normal text-[14px] leading-[20px] text-[rgb(21,21,21)] placeholder:text-[rgb(102, 102, 102)]" />
                            <button className="absolute right-1 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div>© 2025 Captr Inc. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
