import React from 'react';

const photos = [
  { src: '/images/gallery/IMG_7034.jpeg', alt: 'Large group photo outdoors' },
  { src: '/images/gallery/IMG_7035.jpeg', alt: 'Friends smiling at the park' },
  { src: '/images/gallery/IMG_7033.jpeg', alt: 'Showcase group on stage' },
  { src: '/images/gallery/IMG_7038.jpeg', alt: 'Award recipients on stage' },
  { src: '/images/gallery/IMG_7040.jpeg', alt: 'Women in black dresses seated' },
  { src: '/images/gallery/IMG_7039.jpeg', alt: 'Jose Rizal bronze bust' },
  { src: '/images/gallery/IMG_7041.jpeg', alt: 'Team portrait by windows' },
  { src: '/images/gallery/IMG_7037.jpeg', alt: 'Saxophone and singer performance' },
  { src: '/images/gallery/IMG_7036.jpeg', alt: 'Community group with PH flag' },
];

function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="mx-auto max-w-6xl px-4 py-10">
      <h2 id="gallery-title" className="text-3xl font-semibold mb-6">Community Moments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3]">
            <img src={p.src} alt={p.alt} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
