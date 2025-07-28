'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ApproachSection from '@/components/ApproachSection'
import SolutionsSection from '@/components/SolutionsSection'
import PortfolioSection from '@/components/PortfolioSection'
import { ResearchSection } from '@/components/Research'
import DemoSection from '@/components/DemoSection'
import TechStackSection from '@/components/TechStackSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import ChatbotFloat from '@/components/ChatbotFloat'
import LeadCaptureFloat from '@/components/LeadCaptureFloat'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-absolute">
      <Header />
      
      <HeroSection />
      
      <ApproachSection />
      
      <SolutionsSection />
      
      <PortfolioSection />
      
      <ResearchSection />
      
      <DemoSection />
      
      <TechStackSection />
      
      <BlogSection />
      
      <Footer />
      
      {/* Componentes flotantes */}
      <ChatbotFloat />
      <LeadCaptureFloat />
    </main>
  )
} 