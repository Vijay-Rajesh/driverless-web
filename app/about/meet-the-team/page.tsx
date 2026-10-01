'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WhoWeArePage() {
  // Common Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerGrid = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="w-full bg-white pt-28 pb-16 px-6 md:px-12 text-zinc-900 overflow-hidden">
      <div className="zoom-responsive max-w-6xl mx-auto">
        
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, duration: 0.5 }}
        >
          <motion.p 
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a1d1d] mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl sm:text-5xl font-extrabold text-black"
          >
            Meet The Team
          </motion.h1>
        </motion.div>

        {/* Director Section */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-black mb-8 border-b border-gray-200 pb-3"
          >
            Director
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[280px_1fr] gap-8 items-start bg-zinc-50 p-8 rounded-3xl border border-gray-200 shadow-xl shadow-zinc-200/40 overflow-hidden"
          >
            <div className="aspect-[4/5] rounded-2xl bg-zinc-200 border border-gray-300 overflow-hidden flex items-center justify-center shadow-inner relative group">
              <img
                src="/Dr. Muhammad Khurram"  
                alt="Prof. Dr. Muhammad Khurram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-3 text-gray-700">
              <h3 className="relative top-3.5 text-2xl font-bold text-black">Prof. Dr. Muhammad Khurram</h3>
              
              <h2 className="mt-10 text-xl font-bold text-[#8a1d1d]">Professor and Co-Chairman</h2>

              <p className="text-sm font-medium">Department of Computer & Information Systems Engineering</p>
              <p className="text-sm font-medium">Director, Research Center for Artificial Intelligence (RCAI)</p>
              <p className="text-sm font-medium">Director, National Center of Artificial Intelligence (NCAI) NEDUET & PI, Smart City Lab</p>
              <p className="text-sm font-medium">Ph.D. (IC Design), Massey University, New Zealand, 2012</p>
            </div>
          </motion.div>
        </section>

        {/* Research Team Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-black mb-10 border-b border-gray-200 pb-3"
          >
            Research Team
          </motion.h2>

          {/* Graduate Leads */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#8a1d1d] mb-6">Graduate Leads</h3>
            <motion.div 
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { name: "Ansharah Mobeen", role: "Team Lead", image: "/Ansharah_Mobeen.jpeg" },
                { name: "Fatima Saud", role: "Project Manager, Computer Vision Engineer, Research Associate", image: "/Fatima_Saud1.jpeg" },
                { name: "Hamid Raza", role: "Embedded Systems Engineer, Research Assistant", image: "/Hamid Raza.jpeg" },
                { name: "Saleem", role: "Embedded Systems Engineer, Research Assistant", image: "/saleem.png" }
              ].map((member) => (
                <motion.div 
                  key={member.name} 
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl border border-zinc-200/80 bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1.5 w-full"
                >
                  <div className="w-full aspect-[4/3] bg-zinc-100 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 bg-white flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-bold text-zinc-900 text-base group-hover:text-[#8a1d1d] transition-colors">
                        {member.name}
                      </h4>
                      {member.role && (
                        <p className="text-xs text-zinc-500 mt-1.5 font-medium leading-relaxed">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Undergraduate Students Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#8a1d1d] mb-6">Undergraduate Students</h3>
            <motion.div 
              className="grid gap-6 sm:grid-cols-2 max-w-xl"
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { name: "Tehreem Raza Khan", role: "Hardware Lead", image: "/Tehreem_Raza_Khan1.jpg" },
                { name: "Eshal Kashif", role: "Software Lead", image: "/eshal1.jpeg" }
              ].map((member) => (
                <motion.div 
                  key={member.name} 
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl border border-zinc-200/80 bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1.5 w-full"
                >
                  <div className="w-full aspect-[4/3] bg-zinc-100 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5 bg-white flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-bold text-zinc-900 text-base group-hover:text-[#8a1d1d] transition-colors">
                        {member.name}
                      </h4>
                      {member.role && (
                        <p className="text-xs text-zinc-500 mt-1.5 font-medium leading-relaxed">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Software Team */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-zinc-900 mb-6 border-b border-gray-100 pb-2">Software</h3>
            <motion.div 
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { name: "Muhammad Hussnain Mansoor", image: "/hussnain.jpeg" },
                { name: "Syed Hussain Sajjad", image: "/hussain1.jpeg" },
                { name: "Muhammad Haris", image: "/haris.png" },
                { name: "Hamdan", image: "/hamdan.jpeg" },
                { name: "Mazna Noman Khan", image: "/mazna.jpeg" },
                { name: "Anam Jafar", image: "/anam.jpeg" }
              ].map((member) => (
                <motion.div 
                  key={member.name} 
                  variants={fadeInUp}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl border border-zinc-200/80 bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-zinc-300 hover:-translate-y-1 w-full"
                >
                  <div className="w-full aspect-square bg-zinc-100 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white flex flex-col justify-center flex-1">
                    <h4 className="font-semibold text-zinc-900 text-xs leading-snug group-hover:text-[#8a1d1d] transition-colors">
                      {member.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Embedded/Hardware Team */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900 mb-6 border-b border-gray-100 pb-2">Embedded / Hardware</h3>
            <motion.div 
              className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
              variants={staggerGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { name: "Sumbal Zehra", image: "/Sumbal_Zehra1.jpeg" },
                { name: "Abdul Muiz", image: "/Abdul_Muiz.jpeg" },
                { name: "Muhammad Areeb", image: "/Areeb_Sohail1.jpeg" },
                { name: "Muhammad Ubaid", image: "/Muhammad_Ubaid1.jpeg" },
                { name: "Farhan Raza", image: "/Farhan_Raza1.jpeg" },
                { name: "Shaheer Azmat Khan", image: "/Shaheer_Azmat_Khan1.jpeg" }
              ].map((member) => (
                <motion.div 
                  key={member.name} 
                  variants={fadeInUp}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl border border-zinc-200/80 bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-zinc-300 hover:-translate-y-1 w-full"
                >
                  <div className="w-full aspect-square bg-zinc-100 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 bg-white flex flex-col justify-center flex-1">
                    <h4 className="font-semibold text-zinc-900 text-xs leading-snug group-hover:text-[#8a1d1d] transition-colors">
                      {member.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}