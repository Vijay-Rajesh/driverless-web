"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  const pathname = usePathname() || "/"
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownTimeout = useRef(null)
  const navRef = useRef(null)

  const isHomePage = pathname === "/"

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/meet-the-team" },
    { label: "Technology", href: "/technology", dropdown: "technology" },
    { label: "Media", href: "/media", dropdown: "media" },
    { label: "Be Part of It", href: "/be-part-of-it", dropdown: "involved" },
  ]

  const be_part_of_it_Submenu = [
    { label: "Join Our Team", href: "/be-part-of-it/contact-join-our-team" },
    { label: "Sponsorship Opportunity", href: "/be-part-of-it/sponsorship-form" },
  ]

  const technologySubmenu = [
    { label: "Overview & Stack", href: "/technology/overview_and_stack" },
    { label: "Publications", href: "/technology/publications" },
    { label: "Insights", href: "/technology/insights" },
  ]

  const mediaSubmenu = [
    { label: "News", href: "/media/news" },
    { label: "Gallery", href: "/media/gallery" },
  ]

  // Track scroll position for transparent -> solid transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track hash changes on client
  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    window.addEventListener("popstate", updateHash)
    return () => {
      window.removeEventListener("hashchange", updateHash)
      window.removeEventListener("popstate", updateHash)
    }
  }, [])

  // Submenu items exact match check
  const isExactActive = (href) => {
    if (!href || !pathname) return false
    const [cleanHref, hash] = href.split("#")

    if (hash) {
      return pathname === cleanHref && (currentHash === `#${hash}` || (!currentHash && hash === "overview"))
    }

    return pathname === cleanHref && !currentHash
  }

  // Parent Navigation Links Active Check
  const isParentActive = (link) => {
    if (!link.href || !pathname) return false
    if (link.href === "/") return pathname === "/"

    const [cleanHref] = link.href.split("#")
    if (pathname === cleanHref) return true

    const baseRoute = cleanHref.split("/")[1]
    const currentBaseRoute = pathname.split("/")[1]

    if (baseRoute && currentBaseRoute && baseRoute === currentBaseRoute) {
      return true
    }

    return pathname.startsWith(`${cleanHref}/`)
  }

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  // Outside click & Escape key handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
      if (dropdownTimeout.current) {
        window.clearTimeout(dropdownTimeout.current)
      }
    }
  }, [])

  const openDropdown = (menu) => {
    if (dropdownTimeout.current) {
      window.clearTimeout(dropdownTimeout.current)
    }
    setActiveDropdown(menu)
  }

  const closeDropdown = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  const toggleDropdown = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type))
  }

  const getSubmenuItems = (type) => {
    if (type === "involved") return be_part_of_it_Submenu
    if (type === "technology") return technologySubmenu
    if (type === "media") return mediaSubmenu
    return []
  }

  const renderSubmenuLink = (item, onClick) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] !text-white transition hover:bg-[#6e1717]"
          onClick={onClick}
          role="menuitem"
        >
          {item.label}
        </a>
      )
    }

    const active = isExactActive(item.href)

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`block px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition ${
          active
            ? "bg-[#6e1717] font-bold !text-white underline underline-offset-4"
            : "!text-white hover:bg-[#6e1717]"
        }`}
        onClick={() => {
          if (item.href.includes("#")) {
            const [, hash] = item.href.split("#")
            setCurrentHash(`#${hash}`)
          } else {
            setCurrentHash("")
          }
          onClick()
        }}
        role="menuitem"
      >
        {item.label}
      </Link>
    )
  }

  const isTransparent = isHomePage && !isScrolled

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white border-b border-zinc-200 shadow-sm"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8 2xl:px-10 min-[1920px]:px-14">
        {/* Brand Logo */}
        <Link href="/" className="zoom-responsive flex items-center gap-2" aria-label="NCAI Autonomous home">
          <span className={`text-lg sm:text-xl font-black tracking-tight ${isTransparent ? "text-[#8a1d1d] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : "text-[#8a1d1d]"}`}>
            KHUDCAR
          </span>
          
        </Link>

        {/* Desktop & Mobile Toggle Wrapper */}
        <div className="zoom-responsive flex items-center gap-3">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm font-semibold transition md:hidden ${
              isTransparent
                ? "border-white/30 bg-black/50 text-white backdrop-blur-md hover:bg-black/70"
                : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-7">
            {links.map((link) => {
              const active = isParentActive(link)
              const isOpen = activeDropdown === link.dropdown

              const linkTextColor = active
                ? "!text-[#8a1d1d] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                : isTransparent
                ? "!text-white font-semibold hover:!text-[#8a1d1d] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                : "text-zinc-700 font-medium hover:text-[#8a1d1d]"

              return (
                <div
                  key={link.href}
                  className={link.dropdown ? "relative" : ""}
                  onMouseEnter={() => link.dropdown && openDropdown(link.dropdown)}
                  onMouseLeave={() => link.dropdown && closeDropdown()}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1 text-sm transition ${linkTextColor}`}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => toggleDropdown(link.dropdown)}
                      >
                        {link.label}
                        <svg
                          className={`h-3.5 w-3.5 text-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden
                        >
                          <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                        </svg>
                      </button>

                      {/* Dropdown Container */}
                      <div
                        className={`absolute left-0 top-full pt-2 z-30 w-64 transition-all duration-200 ${
                          isOpen
                            ? "visible opacity-100 translate-y-0"
                            : "invisible pointer-events-none opacity-0 -translate-y-1"
                        }`}
                        role="menu"
                      >
                        <div className="overflow-hidden rounded-md bg-[#8a1d1d] text-white shadow-xl border border-[#6e1717]">
                          {getSubmenuItems(link.dropdown).map((item) =>
                            renderSubmenuLink(item, () => setActiveDropdown(null))
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm transition ${linkTextColor}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              )
            })}

            {/* Desktop CTA Button */}
            <Link
              href="/be-part-of-it/contact-join-our-team"
              className={
                isTransparent
                  ? "border border-white bg-white/20 backdrop-blur-md !text-white hover:bg-white hover:!text-black transition px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-md"
                  : pathname === "/be-part-of-it/contact-join-our-team"
                    ? "border border-[#8a1d1d] bg-[#8a1d1d] text-white transition px-4 py-2 text-xs font-bold uppercase tracking-wider"
                    : "border border-zinc-900 bg-white text-zinc-900 hover:border-black hover:bg-zinc-100 transition px-4 py-2 text-xs font-bold uppercase tracking-wider"
              }
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } border-t md:hidden transition-all duration-300 ${
          isTransparent
            ? "bg-black/90 border-white/10 text-white backdrop-blur-md"
            : "bg-white border-zinc-200 text-zinc-900 shadow-lg"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {links.map((link) => {
            const active = isParentActive(link)
            const isOpen = activeDropdown === link.dropdown

            const mobileLinkStyle = active
              ? "!text-[#8a1d1d] font-bold bg-zinc-50/10"
              : isTransparent
              ? "text-white/90 font-semibold hover:bg-white/10 hover:text-white"
              : "text-zinc-700 font-semibold hover:bg-zinc-100 hover:text-[#8a1d1d]"

            return (
              <div key={link.href}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-xs uppercase tracking-[0.15em] transition ${mobileLinkStyle}`}
                      onClick={() => toggleDropdown(link.dropdown)}
                      aria-expanded={isOpen}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="space-y-1 rounded-md bg-[#8a1d1d] p-2">
                        {getSubmenuItems(link.dropdown).map((item) =>
                          renderSubmenuLink(item, () => setMobileMenuOpen(false))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block rounded-md px-4 py-3 text-xs uppercase tracking-[0.15em] transition ${mobileLinkStyle}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}

          {/* Fixed Mobile CTA Button: White background with outlined border and black text */}
          <Link
            href="/be-part-of-it/contact-join-our-team"
            className="mt-3 block w-full text-center border-2 border-white bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider !text-black transition hover:bg-zinc-200 hover:border-zinc-200 shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}