'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  Users,
  Package,
  Briefcase,
  Phone,
} from 'lucide-react';
import { Button } from '@/app/(users)/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Our Story', href: '/our-story', icon: Users },
    {
      name: 'Product Categories',
      icon: Package,
      dropdown: ['Floorings', 'Furniture', 'Fabrics', 'Walls'],
    },
    { name: 'Career With Us', href: '/career', icon: Briefcase },
  ];

  const isActivePath = (path: string) => pathname === path;

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-white/20'
        }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
            aria-label="Ideall Solutions Home"
          >
            <div className="w-18 h-18">
              <Image
                src="/IDEALLS LOGO.png"
                alt="Ideall Solutions Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>

            {/* <span
              className={`hidden md:inline font-semibold text-base transition-colors duration-300
              ${scrolled ? 'text-[#926f4e]' : 'text-white'}
            `}
            >
              Ideall Solutionz Singapore Pte Ltd
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <nav className="flex items-center space-x-10 relative">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;

                if (item.dropdown) {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={toggleProductDropdown}
                        className={`group flex items-center space-x-1.5 font-medium transition-colors duration-200
                          ${scrolled ? 'text-[#926f4e]' : 'text-white'}
                          hover:text-[#7b5d40]   /* ⚡ FIX — hover color */
                        `}
                      >
                        <IconComponent
                          size={18}
                          className={`${scrolled ? 'text-[#926f4e]' : 'text-white'}
                          group-hover:text-[#7b5d40]`}   /* ⚡ FIX */
                        />
                        <span>{item.name}</span>
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-44 bg-white shadow-md rounded-md border border-gray-200 z-50 overflow-hidden transition-all duration-300 ease-in-out
                        ${isProductDropdownOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 pointer-events-none'}
                      `}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`/product-categories/${subItem.toLowerCase()}`}
                            className="block px-4 py-2 text-[#926f4e] hover:bg-[#f8f5f2] hover:text-[#7b5d40] transition-colors"  /* ⚡ FIX */
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center space-x-1.5 font-medium transition-colors duration-200
                      ${scrolled ? 'text-[#926f4e]' : 'text-white'}
                      ${isActivePath(item.href) ? 'text-[#7b5d40] font-semibold' : ''}   /* ⚡ FIX Active */
                      hover:text-[#7b5d40]   /* ⚡ FIX Hover */
                    `}
                  >
                    <IconComponent
                      size={18}
                      className={`${scrolled ? 'text-[#926f4e]' : 'text-white'}
                      group-hover:text-[#7b5d40]
                      ${isActivePath(item.href) ? 'text-[#7b5d40]' : ''}   /* ⚡ FIX Active */
                    `}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <Button
              variant="outline"
              size="sm"
              className={`border-[#926f4e] font-medium transition-colors
                ${scrolled
                  ? 'text-[#926f4e] hover:bg-[#926f4e] hover:text-white'
                  : 'text-white border-white hover:bg-white hover:text-[#926f4e]'
                }
              `}
              onClick={() => (window.location.href = '/contact')}
            >
              <Phone size={16} className="mr-1.5" />
              Connect Us
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors
              ${scrolled ? 'text-[#926f4e]' : 'text-white'}
              hover:text-[#7b5d40]   /* ⚡ FIX */
            `}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? 'max-h-[600px] opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none'}
          `}
        >
          <div className="px-4 py-4 bg-white/10 backdrop-blur-lg border-t border-white/20 space-y-3">
            <nav className="space-y-3">
              {navigationItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <button
                        onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                        className="flex w-full items-center justify-between px-3 py-2 rounded-lg text-[#926f4e] hover:bg-white/20 hover:text-[#7b5d40] font-medium"  /* ⚡ FIX */
                      >
                        {item.name}
                        <span>{isProductDropdownOpen ? '-' : '+'}</span>
                      </button>

                      <div
                        className={`pl-6 overflow-hidden transition-all duration-300 ease-in-out
                          ${isProductDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
                        `}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`/product-categories/${subItem.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-[#926f4e] hover:bg-white/20 hover:text-[#7b5d40] transition-colors"  /* ⚡ FIX */
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-[#926f4e] hover:bg-white/20 hover:text-[#7b5d40] transition-colors
                      ${isActivePath(item.href) ? 'text-[#7b5d40] font-semibold' : ''}   /* ⚡ FIX Active */
                    `}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <Button
              variant="outline"
              className="w-full justify-center gap-2 text-[#926f4e] border-[#926f4e] hover:bg-[#926f4e] hover:text-white font-medium"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '/contact';
              }}
            >
              <Phone size={24} />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
