import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ImageAutoSlider from '../components/ImageAutoSlider';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { AnimatedSocialLinks } from '../components/AnimatedSocialLinks';

const testimonials = [
  {
    id: 1,
    name: 'Rajeev Shastri',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    description: 'It was a fantastic place for marriages. The venue is beautifully maintained and the staff takes care of everything. Highly recommended for wedding celebrations!',
  },
  {
    id: 2,
    name: 'Sandeep Rana',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    description: 'Had a wonderful experience! The management is very cooperative and the arrangements were top-notch. A great venue for any occasion.',
  },
  {
    id: 3,
    name: 'Reeta Devi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    description: 'Excellent venue with beautiful surroundings. The team was very helpful throughout our event. Would definitely recommend to everyone looking for a great celebration spot.',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aashirvaad Palace - Premier Wedding & Banquet Hall</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/80 to-charcoal/90"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/images/new_bg_image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeIn">
          <img src="/images/logo-transparent.png" alt="Aashirvaad Palace" className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-4 object-contain drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            Aashirvaad <span className="text-accent">Palace</span>
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light italic">
            Where Every Celebration Becomes a Memory
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919317625073?text=Hi%2C%20I%27d%20like%20to%20book%20my%20wedding%20date%20at%20Aashirvaad%20Palace"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-charcoal font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg text-center"
            >
              Book Your Date Today
            </a>
            <Link
              to="/gallery"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Welcome to Aashirvaad Palace</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Nestled in the scenic hills of Jawali, Himachal Pradesh, Aashirvaad Palace (आशीर्वाद पैलेस) is a premier destination for weddings, receptions, 
            and grand celebrations. With exquisite interiors, world-class catering, and impeccable service, we 
            transform your special moments into unforgettable memories. Whether it's an intimate gathering or a 
            grand affair, our dedicated team ensures every detail is perfected.
          </p>
        </div>
      </section>

      {/* Social Links & Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Connect With Us</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <AnimatedSocialLinks
            textColor="text-charcoal"
            socials={[
              {
                name: 'Facebook',
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
                onClick: () => window.open('https://www.facebook.com/p/Aashrivaad-Palace-61579152300931/', '_blank'),
              },
              {
                name: 'Instagram',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
                onClick: () => window.open('https://www.instagram.com/aashirvaad_palace/', '_blank'),
              },
              {
                name: 'WhatsApp',
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
                onClick: () => window.open('https://wa.me/919317625073', '_blank'),
              },
            ]}
          />
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=32.1503,76.0112&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aashirvaad Palace Location"
              className="w-full"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/?q=Aashirvaad+Palace+Jawali+Mutlahr+Himachal+Pradesh+176023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Aashirvaad Palace, Jawali, Mutlahr, Himachal Pradesh 176023
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: '👥', title: '500+ Capacity', desc: 'Spacious halls for grand celebrations' },
              { icon: '🍽️', title: 'Premium Catering', desc: 'Multi-cuisine culinary excellence' },
              { icon: '✨', title: 'Elegant Decor', desc: 'Customizable themed decorations' },
              { icon: '🅿️', title: 'Ample Parking', desc: 'Complimentary valet parking' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-cream hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Glimpse of Elegance</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-charcoal/70">Explore our beautifully crafted celebrations</p>
        </div>
        <ImageAutoSlider />
        <div className="text-center mt-6 md:mt-10">
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        <TestimonialCarousel
          testimonials={testimonials}
          className="max-w-md mx-auto"
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Celebrate?</h2>
          <p className="text-xl text-white/80 mb-8">Book your special date today and let us make your dreams come true</p>
          <a
            href="https://wa.me/919317625073?text=Hi%2C%20I%27d%20like%20to%20book%20my%20wedding%20date%20at%20Aashirvaad%20Palace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-charcoal font-bold text-lg rounded-lg hover:bg-white transition-all hover:scale-105 shadow-xl text-center"
          >
            Book Your Date Today
          </a>
        </div>
      </section>
    </>
  );
}
