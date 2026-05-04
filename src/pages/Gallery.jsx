import { Helmet } from "react-helmet-async"
import { useState } from "react"
import { ContainerScroll, CardsContainer, CardTransformed } from "@/components/animated-cards-stack"

const galleryImages = [
  { src: "/images/frontview.png", alt: "Aashirvaad Palace front view" },
  { src: "/images/homepage_photos.jpeg", alt: "Aashirvaad Palace venue" },
  { src: "/images/homepagephotos.jpeg", alt: "Aashirvaad Palace interior" },
  { src: "/images/screenshot-1.png", alt: "Aashirvaad Palace event" },
  { src: "/images/WhatsApp Image 2026-05-02 at 20.12.14.jpeg", alt: "Aashirvaad Palace celebration" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&fit=crop", alt: "Traditional wedding ceremony" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&fit=crop", alt: "Grand reception hall setup" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&fit=crop", alt: "Floral decoration arrangement" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&fit=crop", alt: "Elegant event setup" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&fit=crop", alt: "Luxurious table setting" },
  { src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&fit=crop", alt: "Romantic wedding couple" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b47306a?w=600&fit=crop", alt: "Festive celebration lights" },
]

const filters = ["all", "weddings", "receptions", "decor"]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(item => {
        if (activeFilter === "weddings") return ["Traditional wedding ceremony", "Romantic wedding couple"].includes(item.alt)
        if (activeFilter === "receptions") return ["Grand reception hall setup", "Elegant event setup", "Festive celebration lights", "Aashirvaad Palace event", "Aashirvaad Palace celebration"].includes(item.alt)
        if (activeFilter === "decor") return ["Floral decoration arrangement", "Luxurious table setting"].includes(item.alt)
        return true
      })

  return (
    <>
      <Helmet>
        <title>Gallery - Aashirvaad Palace</title>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary/10 to-cream">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Scroll through our collection of beautiful celebrations and events.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-4 bg-cream sticky top-0 z-20 border-b border-primary/10">
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-charcoal hover:bg-primary/10 border border-primary/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Animated Cards Gallery */}
      <section className="bg-cream">
        <ContainerScroll className="h-[300vh] w-full">
          <div className="sticky left-0 top-0 h-svh w-full py-8 flex items-center justify-center">
            <CardsContainer className="mx-auto size-full max-h-[400px] max-w-[340px]">
              {filteredItems.map((item, index) => (
                <CardTransformed
                  key={item.alt}
                  arrayLength={filteredItems.length}
                  index={index + 2}
                  variant="light"
                  className="overflow-hidden !rounded-xl !p-0 shadow-xl border-accent/20"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 pt-12">
                    <p className="text-white text-sm font-medium">{item.alt}</p>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </section>

      {/* Static Grid Fallback */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">All Photos</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={`static-${index}`}
                className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
