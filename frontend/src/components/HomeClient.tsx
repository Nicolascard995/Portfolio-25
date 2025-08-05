'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutMeSection from '@/components/AboutMeSection'
import ApproachSection from '@/components/ApproachSection'
import SolutionsSection from '@/components/SolutionsSection'
import PortfolioSection from '@/components/PortfolioSection'
import { ResearchSection } from '@/components/Research'
import TechStackSection from '@/components/TechStackSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import ChatbotFloat from '@/components/ChatbotFloat'
import LeadCaptureFloat from '@/components/LeadCaptureFloat'

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-dark-absolute">
      <Header />
      
      <HeroSection />
      
      <AboutMeSection />
      
      <ApproachSection />
      
      <SolutionsSection />
      
      <PortfolioSection />
      
      <ResearchSection />
      
      <TechStackSection />
      
      <BlogSection />
      
      <Footer />
      
      {/* Componentes flotantes */}
      <ChatbotFloat />
      <LeadCaptureFloat />
    </main>
  )
} 