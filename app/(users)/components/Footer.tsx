import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-[#9588b4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IS</span>
              </div>
              <div>
                <div className="text-primary font-bold text-xl">Ideall Solutionz</div>
                <div className="text-gray-900">Global Procurement Solutions</div>
              </div>
              {/* <Image
                                              src="/IDEALLS LOGO.png"
                                              alt="Ideall Solutions Logo"
                                              width={200}
                                              height={140}
                                              className="object-contain"
                                              priority
                                            /> */}
            </div>
            <p className="text-primary mb-4 max-w-md">
              Ideall Solutionz Singapore PTE LTD specializes in international trade and procurement solutions for premium interior products.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin size={16} />
                <span>Singapore, Global Operations</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Phone size={16} />
                <span>+65 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Mail size={16} />
                <span>info@ideallsolutions.sg</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-primary hover:text-primary transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              {/* <li>
                <Link href="/product-categories" className="text-primary hover:text-primary transition-colors duration-200">
                  Product Categories
                </Link>
              </li> */}
              <li>
                <Link href="/career" className="text-primary hover:text-primary transition-colors duration-200">
                  Career With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary">
               
              <li>
                <Link href="product-categories/floorings" className="text-primary hover:text-primary transition-colors duration-200">
                  Floorings
                </Link>
              </li>
              <li>
                <Link href="product-categories/furniture" className="text-primary hover:text-primary transition-colors duration-200">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="product-categories/fabrics" className="text-primary hover:text-primary transition-colors duration-200">
                  Fabrics
                </Link>
              </li>
              <li>
                <Link href="product-categories/walls" className="text-primary hover:text-primary transition-colors duration-200">
                  Fashion Walls
                </Link>
              </li>
               
                
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-900 mt-8 pt-8 text-center">
          <p className="text-primary">
            © 2025 Ideall Solutionz Singapore PTE LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}