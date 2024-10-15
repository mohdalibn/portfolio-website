"use client"

import { useState, useEffect } from "react"
import Header from "./mycomponents/Header"
import Footer from "./mycomponents/Footer"
import Main from "./mycomponents/Main"

export function PortfolioComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    (
    
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">

        <Header/>

        <Main/>

        <Footer/>

      </div>)

  )
}