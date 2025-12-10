import { useState } from 'react';
import { Camera } from 'lucide-react';

const photoGallery = [
  { id: 1, src: '/images/snowboarding_Jan2019.jpg', alt: 'Snowboarding Jan 2019', caption: "Shreddin'", date: 'Jan 2019', month: 1, year: 2019 },
  { id: 2, src: '/images/formals_May2019.JPG', alt: 'Formals May 2019', caption: 'Formals', date: 'May 2019', month: 5, year: 2019 },
  { id: 3, src: '/images/hiking_Oct2020.JPG', alt: 'Hiking Oct 2020', caption: "Lauren's last hike", date: 'Oct 2020', month: 10, year: 2020 },
  { id: 4, src: '/images/beach_Jun2021.JPG', alt: 'Beach June 2021', caption: 'Beach', date: 'Jun 2021', month: 6, year: 2021 },
  { id: 5, src: '/images/formals_Nov2021.HEIC', alt: 'Formals Nov 2021', caption: 'Cover of Vogue Magazine', date: 'Nov 2021', month: 11, year: 2021 },
  { id: 6, src: '/images/wisconsin.JPG', alt: 'Wisconsin', caption: 'Wisconsin', date: 'Jun 2021', month: 6, year: 2021 },
  { id: 7, src: '/images/Beach_Jun2022.JPG', alt: 'Beach June 2022', caption: 'Corolla, NC', date: 'Jun 2022', month: 6, year: 2022 },
  { id: 8, src: '/images/Rome_May2022.JPG', alt: 'Rome May 2022', caption: 'Visiting the Gladiators', date: 'May 2022', month: 5, year: 2022 },
  { id: 9, src: '/images/Engaged_July2024.png', alt: 'Engaged July 2024', caption: 'Engaged!', date: 'Jul 2024', month: 7, year: 2024 },
  { id: 10, src: '/images/Ivy_blacksburg_Nov2024.JPG', alt: 'Ivy Blacksburg Nov 2024', caption: "Ivy's first football game!", date: 'Nov 2024', month: 11, year: 2024 },
  { id: 11, src: '/images/engagementPic1.jpg', alt: "Engagement Photo 1", caption: "We finally got engagement pics", date: 'August 2025', month: 8, year: 2025 },
  { id: 12, src: '/images/engagementPic2.jpg', alt: "Engagement Photo 2", caption: "Love in the air", date: 'August 2025', month: 8, year: 2025 },
  { id: 13, src: '/images/engagementPic3.jpg', alt: "Engagement Photo 3", caption: "Sunset vibes", date: 'August 2025', month: 8, year: 2025 },
];

// Helper to group by 3-month periods
function getQuarter(month) {
  if (!month) return null;
  return Math.floor((month - 1) / 3) + 1;
}

function groupPhotosByQuarter(photos) {
  const groups = [];
  let currentGroup = null;
  photos.forEach(photo => {
    if (!photo.month || !photo.year) {
      // Place undated photos in their own group
      groups.push({ label: 'Other', photos: [photo] });
      return;
    }
    const groupLabel = `${['Q1','Q2','Q3','Q4'][getQuarter(photo.month)-1]} ${photo.year}`;
    if (!currentGroup || currentGroup.label !== groupLabel) {
      currentGroup = { label: groupLabel, photos: [] };
      groups.push(currentGroup);
    }
    currentGroup.photos.push(photo);
  });
  return groups;
}

const groupedPhotos = groupPhotosByQuarter(photoGallery.filter(p => p.month && p.year));
const undatedPhotos = photoGallery.filter(p => !p.month || !p.year);
if (undatedPhotos.length) groupedPhotos.push({ label: 'Other', photos: undatedPhotos });

// Flatten for timeline sync
const flatPhotos = groupedPhotos.flatMap(group => group.photos);

const PhotosPage = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <section className="py-20 min-h-screen relative">
      {/* Stationary flower background at the bottom, full width */}
      <img
        src="/images/test_flowers.png"
        alt="flowers background"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100vw',
          minWidth: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.2,
          userSelect: 'none',
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 flex flex-row" style={{ position: 'relative', zIndex: 1 }}>
        {/* Timeline (syncs with photos) */}
        {/* <aside className="hidden md:block pr-8 w-1/4" style={{ marginTop: '300px' }}>
          <div className="flex flex-col gap-6">
            {flatPhotos.map((photo, idx) => (
              <div key={photo.id} className="flex flex-col items-end min-h-[220px] justify-center">
                <span className="text-wedding-coral font-bold text-lg">{photo.date}</span>
                <span className="w-2 h-2 bg-wedding-coral rounded-full mt-2"></span>
              </div>
            ))}
          </div>
        </aside> */}
        {/* Gallery */}
        <div className="w-full md:w-3/4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <Camera className="w-12 h-12 text-wedding-coral mx-auto mb-4" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wedding-coral mb-4">
              Our Photos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flatPhotos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white/90 backdrop-blur-sm border border-wedding-peach mb-6 cursor-pointer" onClick={() => setModalPhoto(photo)}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-wedding-sage font-medium text-center">{photo.caption}</p>
                  <p className="text-xs text-gray-500 text-center">{photo.date}</p>
                </div>
                <div className="absolute inset-0 bg-wedding-coral/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-wedding-peach inline-block">
              <h3 className="font-serif text-xl font-semibold text-wedding-coral mb-4">Share Your Photos</h3>
              <p className="text-gray-700 mb-4">
                We'd love to see your photos from our special day! 
              </p>
              <p className="text-wedding-sage font-medium">
                Use #IJustSawLaurenAndAlexGetMarriedHolyShit on social media
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for blown-up image */}
      {modalPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setModalPhoto(null)}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-2xl font-bold z-10" onClick={() => setModalPhoto(null)}>&times;</button>
            <img src={modalPhoto.src} alt={modalPhoto.alt} className="w-full h-auto rounded-lg shadow-2xl" />
            <div className="mt-4 text-center">
              <p className="text-wedding-sage font-medium text-lg">{modalPhoto.caption}</p>
              <p className="text-xs text-gray-200">{modalPhoto.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotosPage;
