import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modern Landing Page',
  description: 'A modern, responsive landing page built with Next.js and TypeScript',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="container-custom flex justify-between items-center py-4 px-6">
            <div className="text-2xl font-bold text-primary-700">Brand</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-primary-600 transition">Features</a>
              <a href="#testimonials" className="hover:text-primary-600 transition">Testimonials</a>
              <a href="#contact" className="hover:text-primary-600 transition">Contact</a>
            </div>
            <button className="btn-primary">Get Started</button>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container-custom px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0">Brand</div>
              <div className="text-gray-400">© 2024 Modern Landing Page. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}