import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-text-teal-600 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg font-semibold"
            >
              Go Home
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 p-8 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services" className="text-text-teal-600 hover:text-blue-700 font-medium">
                Our Services
              </Link>
              <Link href="/about" className="text-text-teal-600 hover:text-blue-700 font-medium">
                About Us
              </Link>
              <Link href="/testimonials" className="text-text-teal-600 hover:text-blue-700 font-medium">
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}