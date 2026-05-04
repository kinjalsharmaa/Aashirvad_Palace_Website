import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Aashirvaad Palace</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/10 to-cream">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Story</h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Two decades of creating unforgettable celebrations with love, dedication, and excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Beginning</h2>
              <div className="w-12 h-1 bg-accent mb-6"></div>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Founded in 2005, Aashirvaad Palace was born from a simple yet powerful vision: to create a venue 
                where every celebration feels like a royal affair. What started as a modest banquet hall has now 
                grown into one of the most sought-after wedding and event destinations in the region.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Our founder, Rajesh Kumar, drew inspiration from the grand palaces of Rajasthan, blending 
                traditional Indian architecture with modern amenities. Every corner of Aashirvaad Palace reflects 
                this harmonious fusion of heritage and contemporary elegance.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Over the years, we have had the privilege of hosting thousands of weddings, receptions, corporate 
                events, and social gatherings. Each event is a testament to our commitment to excellence and our 
                passion for making dreams come true.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/frontview.png"
                  alt="Aashirvaad Palace front view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 md:p-10 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-charcoal/70 leading-relaxed">
                To deliver exceptional event experiences that exceed expectations, creating lasting memories for 
                our clients and their guests. We strive to provide impeccable service, stunning venues, and 
                attention to detail that transforms every celebration into a masterpiece.
              </p>
            </div>
            <div className="bg-cream p-8 md:p-10 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-charcoal/70 leading-relaxed">
                To be the most trusted and celebrated wedding and event venue, known for our unwavering 
                commitment to quality, innovation, and customer satisfaction. We aim to set new standards in 
                the hospitality industry while honoring the traditions that make every celebration special.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
