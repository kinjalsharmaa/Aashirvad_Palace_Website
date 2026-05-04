const images = [
  '/images/homepage_photos.jpeg',
  '/images/homepagephotos.jpeg',
  '/images/WhatsApp Image 2026-05-02 at 20.12.14.jpeg',
  '/images/frontview.png',
  '/images/screenshot-1.png',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600&auto=format&fit=crop',
];

const duplicatedImages = [...images, ...images];

export default function ImageAutoSlider() {
  return (
    <div className="w-full overflow-hidden bg-cream relative" style={{ height: '320px' }}>
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-cream), transparent)' }}></div>
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--color-cream), transparent)' }}></div>
      <div className="flex gap-4 md:gap-6 slider-track">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={image}
              alt={`Aashirvaad Palace gallery image ${(index % images.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
