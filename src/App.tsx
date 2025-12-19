import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustedBy } from './components/TrustedBy'
import { FeatureHighlight } from './components/FeatureHighlight'
import { Features } from './components/Features'
import { AdditionalFeatures } from './components/AdditionalFeatures'
import { BenefitDeepDive } from './components/BenefitDeepDive'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

import { SmoothScroll } from './components/SmoothScroll'

export default function App() {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
                <Navbar />
                <Hero />
                <TrustedBy />
                <FeatureHighlight />
                <Features />
                <AdditionalFeatures />
                <BenefitDeepDive />
                <HowItWorks />
                <Testimonials />
                <Pricing />
                {/* <Blog /> */}
                <FAQ />
                <CTA />
                <Footer />
                <div className="fixed bottom-0 left-0 right-0 h-25 bg-transparent z-50 pointer-events-none backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            </div>
        </SmoothScroll>
    )
}
