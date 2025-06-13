"use client"
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: string
  icon?: LucideIcon
  breadcrumbs?: Array<{
    name: string
    href: string
  }>
}

export default function PageHeader({ 
  title, 
  description, 
  backgroundImage = 'https://picsum.photos/seed/header/1920/400',
  icon: Icon,
  breadcrumbs
}: PageHeaderProps) {
  return (
    <div className="relative bg-primary py-16 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute h-16 w-16 rounded-full bg-white"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div
          className="absolute h-12 w-12 rounded-full bg-white"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ right: '15%', top: '30%' }}
        />
        <motion.div
          className="absolute h-20 w-20 rounded-full bg-white"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '30%', bottom: '20%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="py-4">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((item, idx) => (
                <li key={item.href} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4" />
                  <Link 
                    href={item.href}
                    className={`$${
                      idx === breadcrumbs.length - 1 
                        ? 'text-white pointer-events-none' 
                        : 'hover:text-white transition-colors'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Main Content */}
        <div className="w-full max-w-3xl mx-auto text-center">
          {Icon && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto mb-6"
            >
              <Icon className="h-16 w-16 text-white opacity-80" />
            </motion.div>
          )}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-3 max-w-2xl text-xl text-gray-100 sm:mt-4"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}
