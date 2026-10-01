'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  caption: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  // Laptop layout is the reference. Above ~1440px we uniformly "zoom" the page
  // so larger screens show the exact same view, just bigger. Mobile/laptop untouched.
  const LAPTOP_WIDTH = 1440
  const [zoom, setZoom] = useState(1)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setZoom(w > LAPTOP_WIDTH ? Math.min(w / LAPTOP_WIDTH, 1.9) : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Complete Driverless Car Project Gallery Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Autonomous Vehicle Architecture',
      caption: 'Main sensor-integrated electric vehicle platform for autonomous navigation.',
      category: 'Autonomous Car Design',
      image: '/project_car_image1.jpg',
    },
    {
      id: 2,
      title: 'Solid-State LiDAR Integration',
      caption: 'Roof-mounted RoboSense RubyPlus LiDAR configuration for 360-degree point-cloud perception.',
      category: 'Autonomous Car Design',
      image: '/project_car_image2.jpg',
    },
    {
      id: 3,
      title: 'Drive-By-Wire Actuation Control',
      caption: 'Low-level electronic throttle and steering system interface.',
      category: 'Autonomous Car Design',
      image: '/project_car_image3.jpg',
    },
    {
      id: 4,
      title: 'Field Testing & Calibration',
      caption: 'Sensor calibration and real-time path execution tests on track.',
      category: 'Autonomous Car Design',
      image: '/project_car_image4.jpg',
    },
    {
      id: 5,
      title: 'On-Board Processing Rig',
      caption: 'High-performance GPU cluster processing ROS 2 node communications.',
      category: 'Autonomous Car Design',
      image: '/project_car_image5.jpg',
    },
    {
      id: 6,
      title: 'AV Success Story',
      caption: 'AV Success Story.',
      category: 'AV Success Story',
      image: '/AV Success Story.png',
    },
    {
      id: 7,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image1.png',
    },
    {
      id: 8,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image2.png',
    },
    {
      id: 9,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image3.png',
    },
    {
      id: 10,
     title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image4.png',
    },
    {
      id: 11,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image5.png',
    },
    {
      id: 12,
     title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image6.png',
    },
    {
      id: 13,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image7.png',
    },
    {
      id: 14,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image8.png',
    },
    {
      id: 15,
      title: 'Campus Trial Operations',
      caption: 'Real-world trajectory evaluation on main campus roadways.',
      category: 'Autonomous Car Design',
      image: '/project_car_image6.jpg',
    }
  ]

  // Top 3 Featured Cards for Overlapping Showcase
  const featuredLeft = galleryItems[0]
  const featuredCenter = galleryItems[1]
  const featuredRight = galleryItems[2]

  // Remaining Items for Collage Grid
  const gridCollageItems = galleryItems.slice(3)

  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900 selection:bg-[#8a1d1d] selection:text-white">
      
      {/* HEADER SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-20 px-6 text-center"
        style={{ backgroundImage: "url('/image.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl" style={{ zoom } as React.CSSProperties}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff4d4d]"
          >
            Visual Showcase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl"
          >
            Project Gallery
          </motion.h1>
        </div>
      </section>

      {/* GALLERY CONTAINER */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20" style={{ zoom } as React.CSSProperties}>

        {/* 1. HIGHLIGHTED OVERLAPPING CARDS HERO SHOWCASE WITH COLLAGE BACKGROUND */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-300/80 bg-slate-200/50 p-6 sm:p-10 shadow-inner">
          
          {/* BACKGROUND COLLAGE GRID WITH BLUR & OVERLAY */}
          <div className="absolute inset-0 z-0 grid grid-cols-3 sm:grid-cols-4 gap-2 opacity-150 filter blur-[2px] scale-105 pointer-events-none select-none">
            {galleryItems.map((item) => (
              <div key={`bg-collage-${item.id}`} className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* GRADIENT OVERLAY TO MAINTAIN FOREGROUND READABILITY */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-100/80 via-slate-100/40 to-slate-100/90 pointer-events-none" />

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-[#8a1d1d]/57 border border-[#8a1d1d]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#8a1d1d]">
                Featured Highlights
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Primary Project Vehicles & Telemetry
              </h2>
            </div>

            <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] max-w-5xl mx-auto px-4 overflow-visible">

              {/* LEFT CARD */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(featuredLeft)}
                className="absolute left-4 sm:left-12 z-10 w-[60%] sm:w-[48%] aspect-[4/3] rounded-2xl border-2 border-slate-300 bg-white p-2 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900 group">
                  <img
                    src={featuredLeft.image}
                    alt={featuredLeft.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* HOVER ONLY TEXT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                      {featuredLeft.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                      {featuredLeft.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      {featuredLeft.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(featuredRight)}
                className="absolute right-4 sm:right-12 z-10 w-[60%] sm:w-[48%] aspect-[4/3] rounded-2xl border-2 border-slate-300 bg-white p-2 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900 group">
                  <img
                    src={featuredRight.image}
                    alt={featuredRight.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* HOVER ONLY TEXT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                      {featuredRight.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                      {featuredRight.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      {featuredRight.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CENTER CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => setSelectedImage(featuredCenter)}
                className="relative z-20 w-[72%] sm:w-[54%] aspect-[4/3] rounded-2xl border-4 border-[#8a1d1d] bg-white p-2 shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900 group">
                  <img
                    src={featuredCenter.image}
                    alt={featuredCenter.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* HOVER ONLY TEXT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="text-xs font-mono uppercase tracking-widest text-rose-300 font-bold">
                      {featuredCenter.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                      {featuredCenter.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mt-1">
                      {featuredCenter.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. MODERN MASONRY COLLAGE GRID FOR ALL OTHER IMAGES */}
        <section className="space-y-6">
          <div className="border-b border-slate-300 pb-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Work Behind the Drive
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              A closer look at experiments, the breakthroughs, and everything in between
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[240px]">
            {gridCollageItems.map((item, idx) => {
              const isTall = idx % 4 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#8a1d1d] hover:shadow-xl cursor-pointer ${
                    isTall ? "sm:row-span-2" : "row-span-1"
                  }`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* HOVER ONLY TEXT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
                        {item.category}
                      </span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-3 mt-1 font-normal leading-relaxed">
                        {item.caption}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-300">
                        <span>Expand Image</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>

      {/* LIGHTBOX / MODAL VIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-slate-900 overflow-hidden rounded-2xl border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#8a1d1d] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#6d0f0f] transition-colors shadow-md"
              >
                Close ✕
              </button>

              <div className="relative max-h-[72vh] w-full flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 border-t border-slate-800 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold">
                  {selectedImage.category}
                </span>
                <h2 className="text-xl font-black uppercase tracking-wide text-white mt-1">
                  {selectedImage.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}