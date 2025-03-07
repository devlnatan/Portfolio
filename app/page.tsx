import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white">
      <CustomCursor />
      <ParticleBackground />

      <Suspense fallback={<LoadingScreen />}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </main>
  )
}

