'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Bot, Brain, Code, Cpu, LineChart, Star, Linkedin, Github } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import ServiceCard from "@/components/ServiceCard"
import Logo from "@/components/Logo"
import CaseStudyCarousel from "@/components/CaseStudyCarousel"
import Chatbot from "@/components/Chatbot"
import { FadeInWhenVisible } from "@/components/animations"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9]">
      {/* Header */}
      <motion.header
        className="sticky top-0 w-full py-4 bg-white shadow-md z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Services", "Case Studies", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com/company/futuremorph"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#007BFF" }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://github.com/futuremorph"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#6A0DAD" }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 bg-gradient-to-r from-primary to-secondary overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="flex flex-col items-center text-center space-y-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-white">
                Empowering Startups to Harness the Power of AI
              </h1>
              <p className="mx-auto max-w-[700px] text-cyan-100 md:text-xl lg:text-2xl">
                Transform your business with cutting-edge AI solutions
              </p>
              <Button
                size="lg"
                className="text-lg bg-cta text-white hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="a" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#007BFF" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#6A0DAD" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000" fill="url(#a)">
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                  M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000;
                  M0,1000 C200,900 300,800 500,700 C700,600 800,700 1000,1000;
                  M0,1000 C200,800 300,600 500,600 C700,600 800,800 1000,1000
                "/>
              </path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <FadeInWhenVisible>
          <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <ServiceCard
                  title="AI Integration for Small Businesses"
                  description="Seamlessly integrate AI into your existing business processes to boost efficiency and productivity."
                  icon={Bot}
                />
                <ServiceCard
                  title="Custom NLP Solutions"
                  description="Harness the power of Natural Language Processing to understand and interact with your customers better."
                  icon={Brain}
                />
                <ServiceCard
                  title="Computer Vision Applications"
                  description="Implement cutting-edge computer vision technology to automate visual tasks and gain valuable insights."
                  icon={Cpu}
                />
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Case Studies Section */}
        <FadeInWhenVisible>
          <section className="w-full py-20 bg-[#F9F9F9]">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Case Studies</h2>
              <CaseStudyCarousel />
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to transform your business?
              </h2>
              <p className="mx-auto max-w-[700px] text-cyan-100 md:text-xl">
                Let's discuss how our AI solutions can drive innovation and growth for your startup.
              </p>
              <Button
                size="lg"
                className="text-lg bg-cta text-white hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#333333] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    NLP Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Computer Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex justify-between items-center">
            <p>&copy; 2024 FutureMorph. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://linkedin.com/company/futuremorph"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#007BFF" }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com/futuremorph"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#6A0DAD" }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}

